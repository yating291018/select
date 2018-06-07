import Mock from 'mockjs'
Mock.mock('/api/getCity', (req, res) => {
  return {
    code: 200,
    data: [
      {'pid': 1, 'pname': '河南', 'citys': [{'cid': 2, 'cname': '信阳'}, {'cid': 3, 'cname': '郑州'}]},
      {'pid': 2, 'pname': '上海', 'citys': [{'cid': 21, 'cname': '徐汇'}, {'cid': 22, 'cname': '浦东'}]}
    ]
  }
})
