define(function(require,exports,module){
    require('LArea');
    require('LAreaData1');
    require('LAreaData2');

    return{
        getAddr:function(){
            var area1 = new LArea();
            area1.init({
                'trigger': '#prov',
                'valueTo': '#prov_value',
                'keys': {
                    id: 'id',
                    name: 'name'
                },
                'type': 1,
                'data': LAreaData
            });
            area1.value=[1,13,3];
        }
    }
})