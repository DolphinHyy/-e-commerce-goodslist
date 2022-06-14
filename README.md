## 题目

1、参照视觉稿（把目录下 index.html 文件拖入浏览器中打开，访问其中的 "`A. 频道首页Tab1`" ）

![](./assets/截图2.png)

2、线上页面的效果可以参考：`https://campaign.aliexpress.com/wow/gcp/superdeal-g/index`，使用手机端浏览器可以打开。

3、要求实现的主要功能如下：

* 实现商品卡片的样式。注意这里的商品卡片有两种样式，根据数据的 `type`字段展示不同的卡片：

  ![](./assets/截图1.jpg)

* 用户操作交互行为：
    * 切换类目 Tab 时，重新发起请求。请求回来前，先渲染骨架；请求回来后，渲染页面。
    * 下拉翻页时，发起翻页请求。请求回来前，loding 阻塞；请求回来后，渲染下一页。

* 接口可以 Mock 一个，接口时延为 500 ms，Mock 数据如下：

  ```
  [
      {
          "__filter_product_image": "https://ae04.alicdn.com/kf/H025f2124cda54875a69d1a75712e90093.jpg",
          "effectiveDiscount": 78,
          "title": "Kingston memoria ram ddr 3  ddr3 4GB 2GB DDR 3 8Gb PC3-10600 PC3-12800  DDR 3 1333MHZ 1600MHZ for desktop",
          "type": "ITEM",
          "mixDatasetId": "4001",
          "promotionId": "5000000066293307",
          "trace": "{\"all\":{\"finalScore\":\"0.765684\",\"prod\":32863496966,\"x_object_type\":\"product\",\"triggerId\":\"711002\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%2232863496966%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.631200\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":1,\"idx\":1,\"algInfo\":\"OLC2I\",\"x_object_id\":32863496966},\"finalScore\":\"0.765684\",\"prod\":32863496966,\"x_object_type\":\"product\",\"triggerId\":\"711002\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%2232863496966%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.631200\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":1,\"idx\":1,\"algInfo\":\"OLC2I\",\"x_object_id\":32863496966}",
          "imageUrl": "https://ae04.alicdn.com/kf/H025f2124cda54875a69d1a75712e90093.jpg",
          "id": 32863496966,
          "stock": 240,
          "__track__": "100000516667.100000516667.500000656465.110.1",
          "likes": "146",
          "promotionStartTime": 1653894000000,
          "effectivePromotionMinPrice": "₪ 13.39",
          "reviewStar": "4.8",
          "toolCode": "superDeals",
          "carts": "490",
          "tradeCount": "607",
          "oriMinPrice": "₪ 60.88",
          "orders": "96",
          "detailUrl": "//www.aliexpress.com/item/32863496966.html?pdp_ext_f=%7B%22ship_from%22:%22%22,%22sku_id%22:%2267151846192%22%7D&sourceType=fd&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522eb5a7945-0dc3-4714-9507-7043944c2735%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.30078.172188.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25235%2522%252C%2522x_object_id%2522%253A%252232863496966%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
          "__filter_price": {
              "amount": 13.39,
              "centFactor": 100,
              "cent": 1339,
              "currency": "ILS",
              "currencyCode": "ILS"
          },
          "promotionEndTime": 1654239599000,
          "__pos__": 1,
          "extraInfo": "{\"finished\":false,\"page\":1,\"pageSize\":8,\"streamId\":\"919a1881-70c1-437c-a24c-bb6f1eba7f72\"}"
      },
      {
          "__filter_product_image": "https://ae04.alicdn.com/kf/H8f7f66405cdb4366a2bb5aefa793375bD.jpg",
          "effectiveDiscount": 49,
          "title": "20 Modes Clitoral Sucking Vibrator Female For Women Clit Clitoris Sucker Vacuum Stimulator Dildo Sexy Toys Goods for Adults 18",
          "type": "ITEM",
          "mixDatasetId": "4001",
          "promotionId": "5000000067732391",
          "sellingPointsAll": {
              "marketingSellingpoint": [
                  {
                      "textContent": "1 Bestseller in its Category",
                      "id": "1",
                      "type": "1",
                      "contentType": "1"
                  }
              ]
          },
          "trace": "{\"all\":{\"originScore\":11.964996701863129,\"finalScore\":\"11.964997\",\"x_object_type\":\"product\",\"matchType\":\"OLI2I\",\"triggerId\":\"1005003282196917\",\"sceneTag\":\"NewFDItem\",\"scm-cnt\":\"1007.28480.273940.0\",\"scene\":\"TopSelection-Waterfall\",\"cvrScore\":\"0.00025779\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#2\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%228eee0a13-b8c1-49c2-9e7b-9ec3bd15802d%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.28480.273940.0%22%2C%22countryId%22%3A%22IL%22%2C%22scene%22%3A%22TopSelection-Waterfall%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%232%22%2C%22x_object_id%22%3A%221005002399955475%22%7D\",\"floorId\":\"20100699486\",\"matchScore\":\"0.022400\",\"pageIndex\":1,\"pvid\":\"8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d\",\"algInfoList\":\"compl,OLI2I\",\"listno\":2,\"idx\":2,\"algInfo\":\"OLI2I\",\"ctrScore\":\"0.04641372\",\"x_object_id\":1005002399955475},\"originScore\":11.964996701863129,\"finalScore\":\"11.964997\",\"x_object_type\":\"product\",\"matchType\":\"OLI2I\",\"triggerId\":\"1005003282196917\",\"sceneTag\":\"NewFDItem\",\"scm-cnt\":\"1007.28480.273940.0\",\"scene\":\"TopSelection-Waterfall\",\"cvrScore\":\"0.00025779\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#2\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%228eee0a13-b8c1-49c2-9e7b-9ec3bd15802d%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.28480.273940.0%22%2C%22countryId%22%3A%22IL%22%2C%22scene%22%3A%22TopSelection-Waterfall%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%232%22%2C%22x_object_id%22%3A%221005002399955475%22%7D\",\"floorId\":\"20100699486\",\"matchScore\":\"0.022400\",\"pageIndex\":1,\"pvid\":\"8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d\",\"algInfoList\":\"compl,OLI2I\",\"listno\":2,\"idx\":2,\"algInfo\":\"OLI2I\",\"ctrScore\":\"0.04641372\",\"x_object_id\":1005002399955475}",
          "imageUrl": "https://ae04.alicdn.com/kf/H8f7f66405cdb4366a2bb5aefa793375bD.jpg",
          "id": 1005002399955475,
          "stock": 3918,
          "__track__": "100000516667.100000516667.500000656465.110.2",
          "likes": "627",
          "promotionStartTime": 1653894000000,
          "effectivePromotionMinPrice": "₪ 63.14",
          "reviewStar": "4.8",
          "toolCode": "superDeals",
          "carts": "1909",
          "tradeCount": "41547",
          "oriMinPrice": "₪ 123.82",
          "orders": "5242",
          "detailUrl": "//www.aliexpress.com/item/1005002399955475.html?pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000020629950892%22%7D&sourceType=fd&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%25228eee0a13-b8c1-49c2-9e7b-9ec3bd15802d%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.28480.273940.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522scene%2522%253A%2522TopSelection-Waterfall%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25232%2522%252C%2522x_object_id%2522%253A%25221005002399955475%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
          "__filter_price": {
              "amount": 63.14,
              "centFactor": 100,
              "cent": 6314,
              "currency": "ILS",
              "currencyCode": "ILS"
          },
          "promotionEndTime": 1654066799000,
          "__pos__": 2
      },
      {
          "__filter_product_image": "https://ae04.alicdn.com/kf/H0b7e7faf587c4a8ba29053cfca54f42ax.jpg",
          "effectiveDiscount": 53,
          "title": "2022 NEW S-012 RC Stunt Car Remote Control Watch Gesture Sensor Electric Toy RC Drift Car 2.4GHz 4WD Rotation Gift for Kids Boy",
          "type": "ITEM",
          "mixDatasetId": "812237",
          "promotionId": "5000000068020707",
          "sellingPointsAll": {
              "productSellingpoint": [
                  {
                      "textContent": "Free Return",
                      "id": "27",
                      "type": "1",
                      "contentType": "1"
                  }
              ]
          },
          "trace": "{\"all\":{\"originScore\":3.1430145099875517,\"finalScore\":\"3.143015\",\"x_object_type\":\"product\",\"matchType\":\"OLI2I\",\"triggerId\":\"1005003282196917\",\"sceneTag\":\"NewFDItem\",\"scm-cnt\":\"1007.28480.273940.0\",\"scene\":\"TopSelection-Waterfall\",\"cvrScore\":\"0.00009146\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#4\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22d261e443-e804-4541-bfd0-e0cd17411e34%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.28480.273940.0%22%2C%22countryId%22%3A%22IL%22%2C%22scene%22%3A%22TopSelection-Waterfall%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%234%22%2C%22x_object_id%22%3A%221005002583899920%22%7D\",\"floorId\":\"20100696806\",\"matchScore\":\"0.557200\",\"pageIndex\":1,\"pvid\":\"d261e443-e804-4541-bfd0-e0cd17411e34\",\"algInfoList\":\"OLC2I,OLI2I\",\"listno\":1,\"idx\":1,\"algInfo\":\"OLI2I\",\"ctrScore\":\"0.03436366\",\"x_object_id\":1005002583899920},\"originScore\":3.1430145099875517,\"finalScore\":\"3.143015\",\"x_object_type\":\"product\",\"matchType\":\"OLI2I\",\"triggerId\":\"1005003282196917\",\"sceneTag\":\"NewFDItem\",\"scm-cnt\":\"1007.28480.273940.0\",\"scene\":\"TopSelection-Waterfall\",\"cvrScore\":\"0.00009146\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#4\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22d261e443-e804-4541-bfd0-e0cd17411e34%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.28480.273940.0%22%2C%22countryId%22%3A%22IL%22%2C%22scene%22%3A%22TopSelection-Waterfall%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%234%22%2C%22x_object_id%22%3A%221005002583899920%22%7D\",\"floorId\":\"20100696806\",\"matchScore\":\"0.557200\",\"pageIndex\":1,\"pvid\":\"d261e443-e804-4541-bfd0-e0cd17411e34\",\"algInfoList\":\"OLC2I,OLI2I\",\"listno\":1,\"idx\":1,\"algInfo\":\"OLI2I\",\"ctrScore\":\"0.03436366\",\"x_object_id\":1005002583899920}",
          "imageUrl": "https://ae04.alicdn.com/kf/H0b7e7faf587c4a8ba29053cfca54f42ax.jpg",
          "id": 1005002583899920,
          "stock": 534,
          "__track__": "100000516667.100000516667.500000656465.110.3",
          "likes": "119",
          "promotionStartTime": 1653721200000,
          "effectivePromotionMinPrice": "₪ 19.20",
          "reviewStar": "4.6",
          "toolCode": "realSuperDeals",
          "carts": "610",
          "tradeCount": "833",
          "oriMinPrice": "₪ 40.86",
          "orders": "236",
          "detailUrl": "//www.aliexpress.com/item/1005002583899920.html?pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000026714977196%22%7D&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522d261e443-e804-4541-bfd0-e0cd17411e34%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.28480.273940.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522scene%2522%253A%2522TopSelection-Waterfall%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25234%2522%252C%2522x_object_id%2522%253A%25221005002583899920%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
          "__filter_price": {
              "amount": 19.2,
              "centFactor": 100,
              "cent": 1920,
              "currency": "ILS",
              "currencyCode": "ILS"
          },
          "promotionEndTime": 1654066799000,
          "__pos__": 3
      },
      {
          "trace": "{\"all\":{\"expoAlgInfo\":\"OLC2I\",\"matchScore\":\"0.631200\",\"finalScore\":\"0.765684\",\"expoId\":29948121,\"x_object_type\":\"portal\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":1,\"scm-cnt\":\"1007.30078.172188.0\",\"idx\":1,\"x_object_id\":29948121,\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22portal%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%2229948121%22%7D\"},\"finalScore\":\"0.765684\",\"expoId\":29948121,\"x_object_type\":\"portal\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22portal%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%2229948121%22%7D\",\"expoAlgInfo\":\"OLC2I\",\"matchScore\":\"0.631200\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":1,\"idx\":1,\"x_object_id\":29948121}",
          "themeTitle": "Exciting tech finds",
          "discount": 50,
          "datasetId": "150003",
          "id": 29948121,
          "type": "THEME",
          "mixDatasetId": "150003",
          "__pos__": 4,
          "__track__": "100000516667.100000516667.500000656465.110.4",
          "products": [
              {
                  "promotionStartTime": 1653894000000,
                  "__filter_product_image": "https://ae04.alicdn.com/kf/H025f2124cda54875a69d1a75712e90093.jpg",
                  "effectiveDiscount": 78,
                  "title": "Kingston memoria ram ddr 3  ddr3 4GB 2GB DDR 3 8Gb PC3-10600 PC3-12800  DDR 3 1333MHZ 1600MHZ for desktop",
                  "effectivePromotionMinPrice": "₪ 13.39",
                  "promotionId": "5000000066293307",
                  "reviewStar": "4.8",
                  "trace": "{\"all\":{\"finalScore\":\"0.765684\",\"prod\":32863496966,\"x_object_type\":\"product\",\"triggerId\":\"711002\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%2232863496966%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.631200\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":1,\"idx\":1,\"algInfo\":\"OLC2I\",\"x_object_id\":32863496966},\"finalScore\":\"0.765684\",\"prod\":32863496966,\"x_object_type\":\"product\",\"triggerId\":\"711002\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%2232863496966%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.631200\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":1,\"idx\":1,\"algInfo\":\"OLC2I\",\"x_object_id\":32863496966}",
                  "toolCode": "superDeals",
                  "carts": "490",
                  "tradeCount": "607",
                  "imageUrl": "https://ae04.alicdn.com/kf/H025f2124cda54875a69d1a75712e90093.jpg",
                  "oriMinPrice": "₪ 60.88",
                  "orders": "96",
                  "id": 32863496966,
                  "detailUrl": "//www.aliexpress.com/item/32863496966.html?pdp_ext_f=%7B%22ship_from%22:%22%22,%22sku_id%22:%2267151846192%22%7D&sourceType=fd&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522eb5a7945-0dc3-4714-9507-7043944c2735%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.30078.172188.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25235%2522%252C%2522x_object_id%2522%253A%252232863496966%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
                  "__filter_price": {
                      "amount": 13.39,
                      "centFactor": 100,
                      "cent": 1339,
                      "currency": "ILS",
                      "currencyCode": "ILS"
                  },
                  "stock": 240,
                  "promotionEndTime": 1654239599000,
                  "likes": "146"
              },
              {
                  "promotionStartTime": 1653894000000,
                  "__filter_product_image": "https://ae04.alicdn.com/kf/H25133730dfb64f1fbb04e3c3f215a6c4Z.jpg",
                  "effectiveDiscount": 59,
                  "title": "Netac SSD 240 gb SSD 1tb SATA3 SATA SSD 512gb 256gb 128gb 480gb 120gb 2.5 hdd Internal Solid State Hard Drive Disk for Laptop",
                  "effectivePromotionMinPrice": "₪ 79.54",
                  "promotionId": "5000000066293307",
                  "sellingPointsAll": {
                      "productSellingpoint": [
                          {
                              "textContent": "Free Shipping",
                              "id": "38",
                              "type": "1",
                              "contentType": "1"
                          }
                      ]
                  },
                  "reviewStar": "4.9",
                  "trace": "{\"all\":{\"finalScore\":\"0.678900\",\"prod\":1005002592023412,\"x_object_type\":\"product\",\"triggerId\":\"20100699496\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%221005002592023412%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.678900\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":2,\"idx\":2,\"algInfo\":\"compl\",\"x_object_id\":1005002592023412},\"finalScore\":\"0.678900\",\"prod\":1005002592023412,\"x_object_type\":\"product\",\"triggerId\":\"20100699496\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%221005002592023412%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.678900\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":2,\"idx\":2,\"algInfo\":\"compl\",\"x_object_id\":1005002592023412}",
                  "toolCode": "superDeals",
                  "carts": "154",
                  "tradeCount": "1962",
                  "imageUrl": "https://ae04.alicdn.com/kf/H25133730dfb64f1fbb04e3c3f215a6c4Z.jpg",
                  "oriMinPrice": "₪ 193.98",
                  "orders": "285",
                  "id": 1005002592023412,
                  "detailUrl": "//www.aliexpress.com/item/1005002592023412.html?pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000021301706019%22%7D&sourceType=fd&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522eb5a7945-0dc3-4714-9507-7043944c2735%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.30078.172188.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25235%2522%252C%2522x_object_id%2522%253A%25221005002592023412%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
                  "__filter_price": {
                      "amount": 79.54,
                      "centFactor": 100,
                      "cent": 7954,
                      "currency": "ILS",
                      "currencyCode": "ILS"
                  },
                  "stock": 577,
                  "promotionEndTime": 1654239599000,
                  "likes": "23"
              },
              {
                  "promotionStartTime": 1653894000000,
                  "__filter_product_image": "https://ae04.alicdn.com/kf/H008f37eb537d49a39a90d996fbcdcbf2P.jpg",
                  "effectiveDiscount": 74,
                  "title": "SKYLOONG GK61 61 Keys Gaming Mechanical Keyboard USB Wired RGB Backlit Gamer Mechanical Keyboards For Desktop Tablet Laptop SK61",
                  "effectivePromotionMinPrice": "₪ 162.57",
                  "promotionId": "5000000066293307",
                  "sellingPointsAll": {
                      "productSellingpoint": [
                          {
                              "textContent": "Free Return",
                              "id": "27",
                              "type": "1",
                              "contentType": "1"
                          },
                          {
                              "textContent": "Free Shipping",
                              "id": "38",
                              "type": "1",
                              "contentType": "1"
                          }
                      ]
                  },
                  "reviewStar": "4.8",
                  "trace": "{\"all\":{\"finalScore\":\"0.633600\",\"prod\":4001012090939,\"x_object_type\":\"product\",\"triggerId\":\"20100699496\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%224001012090939%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.633600\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":3,\"idx\":3,\"algInfo\":\"compl\",\"x_object_id\":4001012090939},\"finalScore\":\"0.633600\",\"prod\":4001012090939,\"x_object_type\":\"product\",\"triggerId\":\"20100699496\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%224001012090939%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.633600\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":3,\"idx\":3,\"algInfo\":\"compl\",\"x_object_id\":4001012090939}",
                  "toolCode": "superDeals",
                  "carts": "232",
                  "tradeCount": "715",
                  "imageUrl": "https://ae04.alicdn.com/kf/H008f37eb537d49a39a90d996fbcdcbf2P.jpg",
                  "oriMinPrice": "₪ 625.24",
                  "orders": "55",
                  "id": 4001012090939,
                  "detailUrl": "//www.aliexpress.com/item/4001012090939.html?pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000023002470216%22%7D&sourceType=fd&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522eb5a7945-0dc3-4714-9507-7043944c2735%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.30078.172188.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25235%2522%252C%2522x_object_id%2522%253A%25224001012090939%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
                  "__filter_price": {
                      "amount": 162.57,
                      "centFactor": 100,
                      "cent": 16257,
                      "currency": "ILS",
                      "currencyCode": "ILS"
                  },
                  "stock": 326,
                  "promotionEndTime": 1654239599000,
                  "likes": "52"
              }
          ]
      },
      {
          "__filter_product_image": "https://ae04.alicdn.com/kf/Ha121e1a1a86741ddb824124016e04c5aE.jpg",
          "effectiveDiscount": 46,
          "title": "Automatic Male Masturbator Cup Vagina Masturbation Blowjob Pussy Mastuburator Sexy Toys for Men Adult Goods for Men Mastubator",
          "type": "ITEM",
          "mixDatasetId": "4001",
          "promotionId": "5000000067732391",
          "sellingPointsAll": {
              "marketingSellingpoint": [
                  {
                      "textContent": "10 Most Viewed in its Category",
                      "id": "13",
                      "type": "1",
                      "contentType": "1"
                  }
              ]
          },
          "trace": "{\"all\":{\"originScore\":8.503595381625928,\"finalScore\":\"8.503595\",\"x_object_type\":\"product\",\"matchType\":\"OLI2I\",\"triggerId\":\"1005003282196917\",\"sceneTag\":\"NewFDItem\",\"scm-cnt\":\"1007.28480.273940.0\",\"scene\":\"TopSelection-Waterfall\",\"cvrScore\":\"0.00016674\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#2\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%228eee0a13-b8c1-49c2-9e7b-9ec3bd15802d%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.28480.273940.0%22%2C%22countryId%22%3A%22IL%22%2C%22scene%22%3A%22TopSelection-Waterfall%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%232%22%2C%22x_object_id%22%3A%221005002559662393%22%7D\",\"floorId\":\"20100699486\",\"matchScore\":\"0.024400\",\"pageIndex\":1,\"pvid\":\"8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d\",\"algInfoList\":\"compl,OLI2I\",\"listno\":3,\"idx\":3,\"algInfo\":\"OLI2I\",\"ctrScore\":\"0.05099791\",\"x_object_id\":1005002559662393},\"originScore\":8.503595381625928,\"finalScore\":\"8.503595\",\"x_object_type\":\"product\",\"matchType\":\"OLI2I\",\"triggerId\":\"1005003282196917\",\"sceneTag\":\"NewFDItem\",\"scm-cnt\":\"1007.28480.273940.0\",\"scene\":\"TopSelection-Waterfall\",\"cvrScore\":\"0.00016674\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#2\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%228eee0a13-b8c1-49c2-9e7b-9ec3bd15802d%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.28480.273940.0%22%2C%22countryId%22%3A%22IL%22%2C%22scene%22%3A%22TopSelection-Waterfall%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%232%22%2C%22x_object_id%22%3A%221005002559662393%22%7D\",\"floorId\":\"20100699486\",\"matchScore\":\"0.024400\",\"pageIndex\":1,\"pvid\":\"8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d\",\"algInfoList\":\"compl,OLI2I\",\"listno\":3,\"idx\":3,\"algInfo\":\"OLI2I\",\"ctrScore\":\"0.05099791\",\"x_object_id\":1005002559662393}",
          "imageUrl": "https://ae04.alicdn.com/kf/Ha121e1a1a86741ddb824124016e04c5aE.jpg",
          "id": 1005002559662393,
          "stock": 3161,
          "__track__": "100000516667.100000516667.500000656465.110.5",
          "likes": "157",
          "promotionStartTime": 1653894000000,
          "effectivePromotionMinPrice": "₪ 79.03",
          "reviewStar": "4.6",
          "toolCode": "superDeals",
          "carts": "522",
          "tradeCount": "7107",
          "oriMinPrice": "₪ 146.37",
          "orders": "1167",
          "detailUrl": "//www.aliexpress.com/item/1005002559662393.html?pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000027074120836%22%7D&sourceType=fd&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%25228eee0a13-b8c1-49c2-9e7b-9ec3bd15802d%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.28480.273940.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522scene%2522%253A%2522TopSelection-Waterfall%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25232%2522%252C%2522x_object_id%2522%253A%25221005002559662393%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
          "__filter_price": {
              "amount": 79.03,
              "centFactor": 100,
              "cent": 7903,
              "currency": "ILS",
              "currencyCode": "ILS"
          },
          "promotionEndTime": 1654066799000,
          "__pos__": 5
      },
      {
          "__filter_product_image": "https://ae04.alicdn.com/kf/Hdc6c4449127643ed952fbbc192650557T.jpg",
          "effectiveDiscount": 25,
          "title": "Goldenfir SSD 360GB 240GB 120GB 480GB 960GB 1TB SSD 2.5 Hard Drive Disk Disc Solid State Disks 2.5 \" Internal SSD128GB 256GB",
          "type": "ITEM",
          "mixDatasetId": "812237",
          "promotionId": "5000000067735176",
          "sellingPointsAll": {
              "productSellingpoint": [
                  {
                      "textContent": "Free Shipping",
                      "id": "38",
                      "type": "1",
                      "contentType": "1"
                  }
              ]
          },
          "trace": "{\"all\":{\"originScore\":3.1411645977641456,\"finalScore\":\"3.141165\",\"x_object_type\":\"product\",\"matchType\":\"OLI2I\",\"triggerId\":\"32863496966\",\"sceneTag\":\"NewFDItem\",\"scm-cnt\":\"1007.28480.273940.0\",\"scene\":\"TopSelection-Waterfall\",\"cvrScore\":\"0.00011641\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#4\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22d261e443-e804-4541-bfd0-e0cd17411e34%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.28480.273940.0%22%2C%22countryId%22%3A%22IL%22%2C%22scene%22%3A%22TopSelection-Waterfall%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%234%22%2C%22x_object_id%22%3A%2232657147484%22%7D\",\"floorId\":\"20100696806\",\"matchScore\":\"0.027600\",\"pageIndex\":1,\"pvid\":\"d261e443-e804-4541-bfd0-e0cd17411e34\",\"algInfoList\":\"compl,OLI2I\",\"listno\":2,\"idx\":2,\"algInfo\":\"OLI2I\",\"ctrScore\":\"0.02698413\",\"x_object_id\":32657147484},\"originScore\":3.1411645977641456,\"finalScore\":\"3.141165\",\"x_object_type\":\"product\",\"matchType\":\"OLI2I\",\"triggerId\":\"32863496966\",\"sceneTag\":\"NewFDItem\",\"scm-cnt\":\"1007.28480.273940.0\",\"scene\":\"TopSelection-Waterfall\",\"cvrScore\":\"0.00011641\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#4\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22d261e443-e804-4541-bfd0-e0cd17411e34%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.28480.273940.0%22%2C%22countryId%22%3A%22IL%22%2C%22scene%22%3A%22TopSelection-Waterfall%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%234%22%2C%22x_object_id%22%3A%2232657147484%22%7D\",\"floorId\":\"20100696806\",\"matchScore\":\"0.027600\",\"pageIndex\":1,\"pvid\":\"d261e443-e804-4541-bfd0-e0cd17411e34\",\"algInfoList\":\"compl,OLI2I\",\"listno\":2,\"idx\":2,\"algInfo\":\"OLI2I\",\"ctrScore\":\"0.02698413\",\"x_object_id\":32657147484}",
          "imageUrl": "https://ae04.alicdn.com/kf/Hdc6c4449127643ed952fbbc192650557T.jpg",
          "id": 32657147484,
          "stock": 11261,
          "__track__": "100000516667.100000516667.500000656465.110.6",
          "likes": "391",
          "promotionStartTime": 1653894000000,
          "effectivePromotionMinPrice": "₪ 41.11",
          "reviewStar": "4.9",
          "toolCode": "realSuperDeals",
          "carts": "1359",
          "tradeCount": "12607",
          "oriMinPrice": "₪ 54.92",
          "orders": "1575",
          "detailUrl": "//www.aliexpress.com/item/32657147484.html?pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000028730164487%22%7D&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522d261e443-e804-4541-bfd0-e0cd17411e34%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.28480.273940.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522scene%2522%253A%2522TopSelection-Waterfall%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25234%2522%252C%2522x_object_id%2522%253A%252232657147484%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
          "__filter_price": {
              "amount": 41.11,
              "centFactor": 100,
              "cent": 4111,
              "currency": "ILS",
              "currencyCode": "ILS"
          },
          "promotionEndTime": 1654498799000,
          "__pos__": 6
      },
      {
          "__filter_product_image": "//ae04.alicdn.com/kf/S84be727995404493acf862a6da06db17S.jpg",
          "effectiveDiscount": 39,
          "title": "Smart key chain Mini Keychain Compact Key Decorative Holder Clip Home Storage Metal key Clip Aluminum Organizer Keychain Outdoor",
          "type": "ITEM",
          "mixDatasetId": "4001",
          "promotionId": "5000000067725619",
          "sellingPointsAll": {
              "marketingSellingpoint": [
                  {
                      "textContent": "1 Bestseller in its Category",
                      "id": "1",
                      "type": "1",
                      "contentType": "1"
                  }
              ],
              "productSellingpoint": [
                  {
                      "textContent": "Buy 2 get 3% off",
                      "id": "29",
                      "type": "2",
                      "contentType": "1"
                  },
                  {
                      "textContent": "Free Return",
                      "id": "27",
                      "type": "1",
                      "contentType": "1"
                  }
              ]
          },
          "trace": "{\"all\":{\"originScore\":5.096461791254114,\"finalScore\":\"5.096462\",\"x_object_type\":\"product\",\"matchType\":\"OLI2I\",\"triggerId\":\"1005003282196917\",\"sceneTag\":\"NewFDItem\",\"scm-cnt\":\"1007.28480.273940.0\",\"scene\":\"TopSelection-Waterfall\",\"cvrScore\":\"0.00016043\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#2\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%228eee0a13-b8c1-49c2-9e7b-9ec3bd15802d%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.28480.273940.0%22%2C%22countryId%22%3A%22IL%22%2C%22scene%22%3A%22TopSelection-Waterfall%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%232%22%2C%22x_object_id%22%3A%221005003391681384%22%7D\",\"floorId\":\"20100699486\",\"matchScore\":\"0.044000\",\"pageIndex\":1,\"pvid\":\"8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d\",\"algInfoList\":\"OLI2I\",\"listno\":4,\"idx\":4,\"algInfo\":\"OLI2I\",\"ctrScore\":\"0.03176832\",\"x_object_id\":1005003391681384},\"originScore\":5.096461791254114,\"finalScore\":\"5.096462\",\"x_object_type\":\"product\",\"matchType\":\"OLI2I\",\"triggerId\":\"1005003282196917\",\"sceneTag\":\"NewFDItem\",\"scm-cnt\":\"1007.28480.273940.0\",\"scene\":\"TopSelection-Waterfall\",\"cvrScore\":\"0.00016043\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#2\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%228eee0a13-b8c1-49c2-9e7b-9ec3bd15802d%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.28480.273940.0%22%2C%22countryId%22%3A%22IL%22%2C%22scene%22%3A%22TopSelection-Waterfall%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%232%22%2C%22x_object_id%22%3A%221005003391681384%22%7D\",\"floorId\":\"20100699486\",\"matchScore\":\"0.044000\",\"pageIndex\":1,\"pvid\":\"8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d\",\"algInfoList\":\"OLI2I\",\"listno\":4,\"idx\":4,\"algInfo\":\"OLI2I\",\"ctrScore\":\"0.03176832\",\"x_object_id\":1005003391681384}",
          "imageUrl": "//ae04.alicdn.com/kf/S84be727995404493acf862a6da06db17S.jpg",
          "id": 1005003391681384,
          "stock": 3842,
          "__track__": "100000516667.100000516667.500000656465.110.7",
          "likes": "371",
          "promotionStartTime": 1653894000000,
          "effectivePromotionMinPrice": "₪ 9.96",
          "reviewStar": "4.6",
          "toolCode": "superDeals",
          "carts": "1374",
          "tradeCount": "5984",
          "oriMinPrice": "₪ 16.30",
          "orders": "2283",
          "detailUrl": "//www.aliexpress.com/item/1005003391681384.html?pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000025565770992%22%7D&sourceType=fd&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%25228eee0a13-b8c1-49c2-9e7b-9ec3bd15802d%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.28480.273940.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522scene%2522%253A%2522TopSelection-Waterfall%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25232%2522%252C%2522x_object_id%2522%253A%25221005003391681384%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
          "__filter_price": {
              "amount": 9.96,
              "centFactor": 100,
              "cent": 996,
              "currency": "ILS",
              "currencyCode": "ILS"
          },
          "promotionEndTime": 1654498799000,
          "__pos__": 7
      },
      {
          "trace": "{\"all\":{\"expoAlgInfo\":\"OLC2I\",\"matchScore\":\"0.308100\",\"finalScore\":\"0.217114\",\"expoId\":29947196,\"x_object_type\":\"portal\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":2,\"scm-cnt\":\"1007.30078.172188.0\",\"idx\":2,\"x_object_id\":29947196,\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22portal%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%2229947196%22%7D\"},\"finalScore\":\"0.217114\",\"expoId\":29947196,\"x_object_type\":\"portal\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22portal%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%2229947196%22%7D\",\"expoAlgInfo\":\"OLC2I\",\"matchScore\":\"0.308100\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":2,\"idx\":2,\"x_object_id\":29947196}",
          "themeTitle": "Toys trends",
          "discount": 60,
          "datasetId": "150003",
          "id": 29947196,
          "type": "THEME",
          "mixDatasetId": "150003",
          "__pos__": 8,
          "__track__": "100000516667.100000516667.500000656465.110.8",
          "products": [
              {
                  "promotionStartTime": 1653894000000,
                  "__filter_product_image": "https://ae04.alicdn.com/kf/U36ee0044717a44de8d21d1f5d1a3e49bk.jpg",
                  "effectiveDiscount": 53,
                  "title": "S-012 2.4GHz 4WD Mini RC Stunt Car Remote Control Watch Gesture Sensor Electric Toy RC Drift Car Rotation Gift for Kids Gift",
                  "effectivePromotionMinPrice": "₪ 88.17",
                  "promotionId": "5000000066274988",
                  "sellingPointsAll": {
                      "productSellingpoint": [
                          {
                              "textContent": "Buy 3 get 1% off",
                              "id": "29",
                              "type": "2",
                              "contentType": "1"
                          },
                          {
                              "textContent": "Free Return",
                              "id": "27",
                              "type": "1",
                              "contentType": "1"
                          }
                      ]
                  },
                  "reviewStar": "4.8",
                  "trace": "{\"all\":{\"finalScore\":\"0.217114\",\"prod\":1005003553243228,\"x_object_type\":\"product\",\"triggerId\":\"200001410\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%221005003553243228%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.308100\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":1,\"idx\":1,\"algInfo\":\"OLC2I\",\"x_object_id\":1005003553243228},\"finalScore\":\"0.217114\",\"prod\":1005003553243228,\"x_object_type\":\"product\",\"triggerId\":\"200001410\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%221005003553243228%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.308100\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":1,\"idx\":1,\"algInfo\":\"OLC2I\",\"x_object_id\":1005003553243228}",
                  "toolCode": "superDeals",
                  "carts": "12",
                  "tradeCount": "203",
                  "imageUrl": "https://ae04.alicdn.com/kf/U36ee0044717a44de8d21d1f5d1a3e49bk.jpg",
                  "oriMinPrice": "₪ 187.60",
                  "orders": "15",
                  "id": 1005003553243228,
                  "detailUrl": "//www.aliexpress.com/item/1005003553243228.html?pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000026262710243%22%7D&sourceType=fd&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522eb5a7945-0dc3-4714-9507-7043944c2735%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.30078.172188.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25235%2522%252C%2522x_object_id%2522%253A%25221005003553243228%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
                  "__filter_price": {
                      "amount": 88.17,
                      "centFactor": 100,
                      "cent": 8817,
                      "currency": "ILS",
                      "currencyCode": "ILS"
                  },
                  "stock": 23,
                  "promotionEndTime": 1654239599000,
                  "likes": "2"
              },
              {
                  "promotionStartTime": 1653894000000,
                  "__filter_product_image": "https://ae04.alicdn.com/kf/S24ce68db4c944aba8231bb5d1b3e229aB.jpg",
                  "effectiveDiscount": 99,
                  "title": "Children's Name Seal Custom Student's Name Stamp  Kindergarten Clothes Waterproof Name Sticker Will Not be Washed Off  Christmas",
                  "effectivePromotionMinPrice": "₪ 0.03",
                  "promotionId": "5000000066274988",
                  "sellingPointsAll": {
                      "marketingSellingpoint": [
                          {
                              "textContent": "1 Bestseller in its Category",
                              "id": "1",
                              "type": "1",
                              "contentType": "1"
                          }
                      ],
                      "productSellingpoint": [
                          {
                              "textContent": "Free Shipping",
                              "id": "38",
                              "type": "1",
                              "contentType": "1"
                          }
                      ]
                  },
                  "reviewStar": "4.6",
                  "trace": "{\"all\":{\"finalScore\":\"0.589400\",\"prod\":1005001843077387,\"x_object_type\":\"product\",\"triggerId\":\"20100699496\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%221005001843077387%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.589400\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":2,\"idx\":2,\"algInfo\":\"compl\",\"x_object_id\":1005001843077387},\"finalScore\":\"0.589400\",\"prod\":1005001843077387,\"x_object_type\":\"product\",\"triggerId\":\"20100699496\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%221005001843077387%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.589400\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":2,\"idx\":2,\"algInfo\":\"compl\",\"x_object_id\":1005001843077387}",
                  "toolCode": "superDeals",
                  "carts": "303",
                  "tradeCount": "6888",
                  "imageUrl": "https://ae04.alicdn.com/kf/S24ce68db4c944aba8231bb5d1b3e229aB.jpg",
                  "oriMinPrice": "₪ 20.57",
                  "orders": "671",
                  "id": 1005001843077387,
                  "detailUrl": "//www.aliexpress.com/item/1005001843077387.html?pdp_ext_f=%7B%22ship_from%22:%22CN%22,%22sku_id%22:%2212000018571427572%22%7D&sourceType=fd&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522eb5a7945-0dc3-4714-9507-7043944c2735%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.30078.172188.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25235%2522%252C%2522x_object_id%2522%253A%25221005001843077387%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
                  "__filter_price": {
                      "amount": 0.03,
                      "centFactor": 100,
                      "cent": 3,
                      "currency": "ILS",
                      "currencyCode": "ILS"
                  },
                  "stock": 15915,
                  "promotionEndTime": 1654239599000,
                  "likes": "41"
              },
              {
                  "promotionStartTime": 1653894000000,
                  "__filter_product_image": "https://ae04.alicdn.com/kf/H67744607ce7e48969506ccb5443e85466.jpg",
                  "effectiveDiscount": 38,
                  "title": "Large Genuine Plants vs. Zombie Toys 2 Complete Set Of Boys Soft Silicone Anime Figure Children's Dolls Christmas Birthday Gifts",
                  "effectivePromotionMinPrice": "₪ 27.97",
                  "promotionId": "5000000066274988",
                  "reviewStar": "4.7",
                  "trace": "{\"all\":{\"finalScore\":\"0.501000\",\"prod\":4001146472117,\"x_object_type\":\"product\",\"triggerId\":\"20100699496\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%224001146472117%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.501000\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":3,\"idx\":3,\"algInfo\":\"compl\",\"x_object_id\":4001146472117},\"finalScore\":\"0.501000\",\"prod\":4001146472117,\"x_object_type\":\"product\",\"triggerId\":\"20100699496\",\"scm-cnt\":\"1007.30078.172188.0\",\"tpp_buckets\":\"21669#0#265320#44_21669#4190#19165#770_15324#0#132599#5\",\"utLogMap\":\"%7B%22process_id%22%3A%22110%22%2C%22x_object_type%22%3A%22product%22%2C%22pvid%22%3A%22eb5a7945-0dc3-4714-9507-7043944c2735%22%2C%22belongs%22%3A%5B%7B%22id%22%3A%224001%22%2C%22type%22%3A%22dataset%22%7D%5D%2C%22pageSize%22%3A%228%22%2C%22language%22%3A%22en%22%2C%22scm%22%3A%221007.30078.172188.0%22%2C%22countryId%22%3A%22IL%22%2C%22tpp_buckets%22%3A%2221669%230%23265320%2344_21669%234190%2319165%23770_15324%230%23132599%235%22%2C%22x_object_id%22%3A%224001146472117%22%7D\",\"floorId\":\"20100699496\",\"matchScore\":\"0.501000\",\"pvid\":\"eb5a7945-0dc3-4714-9507-7043944c2735\",\"listno\":3,\"idx\":3,\"algInfo\":\"compl\",\"x_object_id\":4001146472117}",
                  "toolCode": "superDeals",
                  "carts": "159",
                  "tradeCount": "968",
                  "imageUrl": "https://ae04.alicdn.com/kf/H67744607ce7e48969506ccb5443e85466.jpg",
                  "oriMinPrice": "₪ 45.09",
                  "orders": "197",
                  "id": 4001146472117,
                  "detailUrl": "//www.aliexpress.com/item/4001146472117.html?pdp_ext_f=%7B%22ship_from%22:%22%22,%22sku_id%22:%2212000018007045880%22%7D&sourceType=fd&&scm=1007.28480.273940.0&scm_id=1007.28480.273940.0&scm-url=1007.28480.273940.0&pvid=8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d&utparam=%257B%2522process_id%2522%253A%2522110%2522%252C%2522x_object_type%2522%253A%2522product%2522%252C%2522pvid%2522%253A%2522eb5a7945-0dc3-4714-9507-7043944c2735%2522%252C%2522belongs%2522%253A%255B%257B%2522id%2522%253A%25224001%2522%252C%2522type%2522%253A%2522dataset%2522%257D%255D%252C%2522pageSize%2522%253A%25228%2522%252C%2522language%2522%253A%2522en%2522%252C%2522scm%2522%253A%25221007.30078.172188.0%2522%252C%2522countryId%2522%253A%2522IL%2522%252C%2522tpp_buckets%2522%253A%252221669%25230%2523265320%252344_21669%25234190%252319165%2523770_15324%25230%2523132599%25235%2522%252C%2522x_object_id%2522%253A%25224001146472117%2522%257D&_t=%252Cscm-url%253A1007.28480.273940.0%252Cpvid%253A8eee0a13-b8c1-49c2-9e7b-9ec3bd15802d",
                  "__filter_price": {
                      "amount": 27.97,
                      "centFactor": 100,
                      "cent": 2797,
                      "currency": "ILS",
                      "currencyCode": "ILS"
                  },
                  "stock": 586,
                  "promotionEndTime": 1654239599000,
                  "likes": "79"
              }
          ]
      }
  ]
  ```

  4、项目开发采用 react 技术栈，项目的脚手架采用 react 官方推荐的 [create-react-app](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md，自行初始化工程。

