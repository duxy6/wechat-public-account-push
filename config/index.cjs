/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx313d2f0aa3fac87c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0b339c47672a9a922db9ddb52a8d64af',

  PROVINCE: '内蒙古',
  CITY: '包头',

  USERS: [
    {
      // 想要发送的人的名字
      name: '老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oo2i55mQmkRQ7rsQmB1d0mKqSWBU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'JulTCZEkJmZs6OwMa68Us9TbHTuBPQQCwN_lPsqvGYk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1997', date: '08-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
       //  {
       //    type: '生日', name: '李四', year: '1996', date: '05-20',
       //  },
        {
          type: '节日', name: '订婚日', year: '2023', date: '04-30',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2016-10-02' },
        // 订婚纪念日
        { keyword: 'Be_engaged_day', date: '2023-04-30' },
        // 登记纪念日
        { keyword: 'registration_day', date: '2023-06-21' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-12-10' }
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oo2i55mQmkRQ7rsQmB1d0mKqSWBU',
    }
  ],

}

module.exports = USER_CONFIG

