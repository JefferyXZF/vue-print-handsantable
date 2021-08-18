
export default {
  props: {
    // 主题颜色
    themeColor: '#1890ff',

    // 内容文本
    contentLabel: {
      type: String,
      default: '内容'
    },

    // 标题文本
    titleLabel: {
      type: String,
      default: '标题'
    },

    // 自定义字段文本
    customFieldsLabel: {
      type: String,
      default: '自定义字段'
    },

    // 系统字段文本
    systemFieldsLabel: {
      type: String,
      default: '系统字段'
    },

    // 自定义字段
    customFields: {
      type: Array,
      default: () => []
    },

    // 系统字段
    systemFields: {
      type: Array,
      default: () => []
    }
  }
}
