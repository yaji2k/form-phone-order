Vue.component('app-phone-order', {
        data() {
            return {
                inputs: [
                    {
                        type: "text",
                        title: "имя"
                    },
                    {
                        type: "email",
                        title: "email"

                    }
                ],
                count: 0
            }
        },
        computed: {
            width() {
                if(this.count >= 1){
                    this.count = 1;
                }
                return (this.count+1) * 50 + '%';
            }
        },
        methods: {
            up() {
                if(this.count >= 1){
                    this.count = 1;
                } else {
                    this.count++;
                }
            }
        },
        template: `<div class="form_phone_order_block">
        <div class="form_phone_order_title">{{inputs[count].title}}</div>
            <div class="form_phone_order_head"><input class="form_phone_order_input" :type="inputs[count].type">
                <button class="form_phone_order_btn" type="submit" @click.prevent="up()">
                <img class="form_phone_order_img" src="./img/arrowleft.png" alt=""></button>
            </div>
            <div class="form_phone_order_scale">
                <div class="form_phone_order_scale_active" :style="{width: width}"></div>
            </div>
            <div class="form_phone_order_sub">0{{count+1}}/02</div>
        </div>`
    });
    new Vue({
        el: '#app',
    });