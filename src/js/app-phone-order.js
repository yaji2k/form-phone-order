Vue.component('app-phone-order', {
    data() {
        return {
            inputs: [
                {
                    type: "text",
                    title: "имя",
                    name: "name",
                    pattern: /^[a-zA-Zа-яА-Я ]{3,30}$/,
                },
                {
                    type: "text",
                    title: "телефон",
                    name: "phone",
                    pattern: /^[0-9]{7,11}$/,
                }
            ],
            checked: true,
            count: 0,
            maxcount: 1,
            submit: true,
        }
    },
    computed: {
        width() {
            if (this.count > this.maxcount) {
                this.count = this.maxcount;
            }
            console.log(this.submit);
            return (this.count + 1) * 50 + '%';
        },
    },
    methods: {
        up() {
            if (this.count >= 1) {
                this.count = 0;
                this.submit = true;
            } else {
                this.count++;
                this.submit= false;
            }
        },
    },
    template: `<div class="form_phone_order_block">
        <div class="form_phone_order_title">{{inputs[count].title}}</div>
            <div class="form_phone_order_head">
            <input class="form_phone_order_input" 
                    :type="input.type" 
                    :name="input.name" v-for="(input, index) in inputs" :key="index" v-show="count == index">
                <button class="form_phone_order_btn" v-if="submit" @click.prevent="up()" :disabled="!checked">
                <img class="form_phone_order_img" src="./img/arrright_black.png" alt=""></button>
                <button class="form_phone_order_btn" v-else @click="up()" :disabled="!checked">
                <img class="form_phone_order_img" src="./img/arrright_black.png" alt=""></button>
            </div>
            <div class="form_phone_order_scale">
                <div class="form_phone_order_scale_active" :style="{width: width}"></div>
            </div>
            <div class="form_phone_order_sub">0{{count+1}}/02</div>
            <div class="get_email__row offset_top_down_m_18">
                <label class="cb_container cb_container_light">
                    <span class="cb_text_light">согласие на обработку персональных данных</span>
                    <input type="checkbox" @click="checked=!checked"  :checked="checked">
                    <span class="cb_checkmark cb_checkmark_light"></span>
                </label>
            </div>
        </div>`
});
new Vue({
    el: '#app',
});