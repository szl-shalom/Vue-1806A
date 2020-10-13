<template>
    <div class="header">
        <span>todolist</span>
        <input type="text" v-model="val" @keydown.enter="add" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            val: "",
        };
    },
    methods: {
        add() {
            if (this.val) {
                this.$emit("add", this.val);

                this.val = "";
            } else {
                alert("输入不能为空！！！");
            }
        },
    },
};
</script>
<style lang="css" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 36px;
    height: 100px;
}
input {
    width: 220px;
    height: 30px;
    float: right;
}
</style>