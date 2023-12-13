// 缓存控制
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // 缓存中有匹配的资源，直接返回
                if (response) {
                    return response;
                }
                // 缓存中没有匹配的资源，去服务器获取
                return fetch(event.request).then(
                    function(response) {
                        // 检查是否获取成功
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        // 如果获取成功，将资源添加到缓存中
                        var responseToCache = response.clone();
                        caches.open('HomePageCache')
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    }
                );
            })
    );
});