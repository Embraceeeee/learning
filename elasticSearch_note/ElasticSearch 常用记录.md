# ElasticSearch 使用记录



## Data Organization

1. 索引（index）
   1. 名词，系一个逻辑命名空间，可对应一个或多个主shard，并且附带有零个或多个从shard
   2. 动词，类似insert
   3. ES中是用一个叫倒排索引来实现搜索加速的功能（与sql中添加索引提高select速度一样）
2. 类型（Type）
   1. 修饰document，代表同类object，因为具有相同的结构
3. 文件（Document）
   1. 存放在ES中的JSON文档，<---> 关系数据库里一个table里面的一行数据
   2. document由field（字段）组成
4. 编号（ID）
   1. id ——一个字符串
   2. 与_index和_type组合时，可代表ES中一个特定的文档

​    <img src=".\image\es与mysql区别.png" alt="es与mysql区别"  />



## Query DSL

> Domain Specific Language  基于JSON，定义查询
>
> 目前开发中比较常用的为query（查询）和Bucket Aggregations（分组）

### query

1. 一般bool用的比较多，它属于复合查询，类似于SQL里面SELECT语句后面加的Where xxx and xxx  

   ```json
    "query": {
           "bool": {
             "filter": {
               "range": {
                 "Test_Start_Time": {
                   "gte": "2021/08/22 08:35:43",
                   "lte": "2021/08/29 08:35:43"
                 }
               }
             },
             "must": [
               {
                 "term": {
                   "Plant": "F136"
                 }
               },
               {
                 "term": {
                   "Line": ".*"
                 }
               },
               {
                 "regexp": {
                   "MCNo": ".*"
                 }
               }
             ]
           }
         }
   ```

   1. bool下面可放filtter过滤器，下面放了个时间查找的range。对总数据进行过滤，在这个时间范围内的数据才会被筛选出来（筛选出来的数据才会到must）
   2. must类似每一项必须符合（xxx and xxx）的意思，与之相反的有must_not
   3. 
      - term表示精确匹配，如为字符串型需要为keyword
      - 类似的有match，不过它会*分词查询*
      - 还有regexp，加入它是为了方便写程式（固定请求参数），".*"表示查找所有MCNo，并且在上面可以写正则相关的表达式，如"F.*"，不过它用起来会降低性能，运行较慢

### Aggregations

1. terms 桶（等价于SQL 里的group by）

   ```json
    "aggs": {
           "group_by_line": {
             "terms": {
               "script": "[doc.Plant.value,doc.Line.value].join('-')",
               "size": 10000
             },
             "aggs": {
               "group_by_model": {
                 "terms": {
                   "field": "model_sfc",
                   "size": 10000
                 },
                 "aggs": {
                   "group_by_sn": {
                     "terms": {
                       "field": "SN",
                       "size": 10000
                     },
                     "aggs": {
                       "group_by_wop": {
                         "filter": {
                           "bool": {
                             "must_not": {
                               "term": {
                                 "W_Op": ""
                               }
                             }
                           }
                         }
                       }
                     }
                   }
                 }
               }
             }
           }
         }
   ```

   1. 这个aggs里面嵌套了四组桶，即group_by_line（这个名称需自己定义），对每个line桶再分，分出机种桶（model_sfc），机种桶下面再分，分为SN桶，SN桶再分，分为各个wop参数的过滤桶

   2. terms定义时，下面可以用"field"指定栏位或者"script"指定多个栏位（类似group by Plant,Line 的效果 0

   3. filter桶，对该桶内容进行bool过滤，过滤出W_Op不为""的document，结果会返回数量

   4. 以下给出官网示例，可理解下

      ```json
      GET /cars/transactions/_search
      {
         "size" : 0,
         "aggs": {
            "brand": {
               "terms": {
                  "field": "brand"
               },
               "aggs": {
                  "color": { 
                     "terms": {
                        "field": "color"
                     }
                  }
               }
            }
         }
      }
      ```

      

      ![嵌套桶示例](.\image\嵌套桶示例.jpg)

   

2. top_hits （方便拿到桶里面的数据）

   ```json
    "aggs": {
                         "top_missrate": {
                           "top_hits": {
                             "_source": [
                               "MissRate",
                               "TMiss",
                               "RMiss",
                               "cnt"
                             ],
                             "size": 1,
                             "sort": [
                               {
                                 "Test_Start_Time": {
                                   "order": "desc"
                                 }
                               }
                             ]
                           }
                         }
                       }
   ```

   1. top_hits指标聚合器用于更重要聚合的最相关文档，这里可以透过它对桶文件进行排序及取值
   2. _source指定拿的栏位值
   3. size指定拿多少条document
   4. sort指定按照哪个栏位排序

   

   

   相关参考链接：

   [有关query 的bool查询的一篇博文](https://blog.csdn.net/qq_36095679/article/details/106561907)

   [关于25种桶聚合的一篇博文](https://blog.csdn.net/qq_36095679/article/details/107194696)

   [嵌套桶官方文档](https://www.elastic.co/guide/cn/elasticsearch/guide/current/_buckets_inside_buckets.html)

   [top_hits官方文档](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-metrics-top-hits-aggregation.html )

   [有关mapping的一篇博文](https://blog.csdn.net/qq_36095679/article/details/109376980)

   

