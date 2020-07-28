const getList = (author, keyword) => {
    // 先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1595851563843,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1595851643649,
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    //先返回假数据
    return {
        id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1595851563843,
            author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含title content 属性
    console.log('new blog...', blogData)
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('update blog...', id, blogData)
    return true
}

const delBlog = (id) => {
    console.log('delete blog', id)
    return true
}
 
module.exports = { getList, getDetail, newBlog, updateBlog, delBlog }