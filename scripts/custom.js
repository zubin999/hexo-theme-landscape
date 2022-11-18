hexo.extend.helper.register('join', (tags, config) => {
    const arr = []
    for (const item of Object.values(tags)) {
        for(const obj of Object.values(item)) {
            arr.push(obj.name);
        }
    }

    return arr.join(',')
})