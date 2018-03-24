define(function(require,exports,module){
    require('jquery');
    return{
        add: function (obj) {
            var num=obj.prev().val();
            var max=obj.prev().attr('max');
            if(num<max){
                num++;
            }
            obj.prev().val(num);
            var unitPrice=obj.parent().parent().find('.unitPrice').text();
            var tPrice=unitPrice*num;
            obj.parent().next().find('.tPrice').text(tPrice+'.00');
            this.price();
        },
        desc:function(obj){
            var num=obj.next().val();
            var min=obj.next().attr('min');
            if(num>min){
                num--;
            }
            obj.next().val(num);
            var unitPrice=obj.parent().parent().find('.unitPrice').text();
            var tPrice=unitPrice*num;
            obj.parent().next().find('.tPrice').text(tPrice+'.00');
            this.price();
        },
        price:function(){
            var subPrice=0;
            var pro_len=0;
            var sel_len=0;
            if($('.sel_pro').length>0){
                $('.cart_pro .row').each(function(){
                    if($(this).find('.sel_pro').is(':checked')){
                        var tPrice=parseInt($(this).find('.tPrice').text());
                        subPrice+=tPrice;
                        $('.sub_price em').text(subPrice+'.00');
                        pro_len=$('.sel_pro').size();
                        sel_len=$('.sel_pro:checked').size();
                        if(pro_len==sel_len){
                            $('.chooseAll').prop('checked',true);
                        }else{
                            $('.chooseAll').prop('checked',false);
                        }
                    }else{
                        $('.sub_price em').text(subPrice+'.00');
                        $('.chooseAll').prop('checked',false);
                    }
                });
            }else{
                $('.sub_price em').text('0.00');
                $('.chooseAll').prop('checked',false);
            }
        },
        del:function(obj){
            obj.parent().remove();
            this.price();
        },
        chooseAll:function(obj){
            if(obj.is(':checked')){
                $('.sel_pro').prop('checked',true);
            }else{
                $('.sel_pro').prop('checked',false);
            }
            this.price();
        }

    }
})