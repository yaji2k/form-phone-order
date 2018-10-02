Vue.component('app-phone-order', {
    data() {
        return {
            inputs: [
                {
                    type: "text",
                    title: "имя",
                    name: "name",
                    value: '',
                    pattern: /^[a-zA-Zа-яА-Я ]{3,30}$/,
                    valid: false

                },
                {
                    type: "text",
                    title: "телефон",
                    name: "phone",
                    value: '',
                    pattern: /^[0-9]{7,11}$/,
                    valid: false
                }
            ],
            checked: true,
            count: 0,
            maxcount: 1,
            submit: true
        }
    },
    computed: {
        width() {
            if (this.count == this.maxcount) {
                this.submit = false;
            }
            if (this.count > this.maxcount) {
                this.count = this.maxcount;
            }
            return (this.count + 1) * 50 + '%';
        },
    },
    methods: {
        onInput(index, value) {
            let data = this.inputs[index];
            data.value = value;
            data.valid = data.pattern.test(value);
        },
        up() {
            if (this.count >= 1) {
                this.count = 1;
            } else {
                this.count++;
            }
        },
        check(i) {
            return this.checked && this.inputs[i].valid;
        },
        submitDone(event) {
            this.count = 0;
            this.input = [
                {
                    type: "text",
                    title: "имя",
                    name: "name",
                    value: '',
                    pattern: /^[a-zA-Zа-яА-Я]{3,30}$/,
                    valid: false
                },
                {
                    type: "text",
                    title: "телефон",
                    name: "phone",
                    value: '',
                    pattern: /^[0-9]{7,11}$/,
                    valid: false
                }
            ];
        }
    },
    template: `<div class="form_phone_order_block" @submit = "submitDone">
        <div class="form_phone_order_title">{{inputs[count].title}}</div>
            <div class="form_phone_order_head">
            <input class="form_phone_order_input" 
                    :type="input.type" 
                    :value="input.value"
                    @input="onInput(index, $event.target.value)"
                    :name="input.name" v-for="(input, index) in inputs" :key="index" v-show="count == index">
                <button class="form_phone_order_btn" v-if="submit" type="submit" @click.prevent="up()" :disabled="!check(0)">
                <img class="form_phone_order_img" src="./img/arrright_black.png" alt=""></button>
                <button class="form_phone_order_btn" type="submit" v-else @click="up()" :disabled="!check(1)">
                <img class="form_phone_order_img" src="./img/arrright_black.png" alt=""></button>
            </div>
            <div class="form_phone_order_scale">
                <div class="form_phone_order_scale_active" :style="{width: width}"></div>
            </div>
            <div class="form_phone_order_sub">0{{count+1}}/02</div>
            <div class="get_email__row offset_top_down_m_18 offset_bot_down_p_124">
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