<template>
    <SidebarLayout>
        <ElForm :model="form" :rules="rules" ref="formRef" status-icon>
            <ElFormItem label="Name" prop="name" @keyup.enter="onSubmit">
                <ElInput
                    placeholder="Name"
                    v-model="form.name"
                    type="text"
                    required
                    :min="2"
                    :max="50"
                />
            </ElFormItem>
            <ElFormItem :rules="rules.surname" prop="surname" label="Surname">
                <ElInput
                    placeholder="Surname"
                    v-model="form.surname"
                    type="text"
                    required
                    :min="2"
                    :max="100"
                />
            </ElFormItem>
            <ElFormItem :rules="rules.email" prop="email" label="Email">
                <ElInput
                    placeholder="Email"
                    v-model="form.email"
                    type="email"
                    required
                    :min="2"
                    :max="100"
                />
            </ElFormItem>
            <ElFormItem>
                <ElButton type="primary" @click="onSubmit(formRef)"
                    >Submit</ElButton
                >
            </ElFormItem>
        </ElForm>
        <template #sidebar>
            <ElLink><RouterLink to="/">Home</RouterLink> </ElLink>
            <ElLink><RouterLink to="/">Contact</RouterLink> </ElLink>
            <ElLink><RouterLink to="/">Listing</RouterLink> </ElLink>
        </template>
    </SidebarLayout>
</template>

<script lang="ts" setup>
import SidebarLayout from '@/layouts/SidebarLayout.vue'
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

const formRef = ref()

const form = reactive({
    name: '',
    surname: '',
    email: '',
})

const rules = reactive<FormRules>({
    name: [
        {
            required: true,
            message: 'Fill in "Name" field',
            trigger: 'blur',
        },
        {
            min: 3,
            max: 100,
            message: 'Length should be 3 to 100',
            trigger: 'blur',
        },
    ],
    surname: [
        {
            required: true,
            message: 'Fill in "Surname" field',
            trigger: 'blur',
        },
        {
            min: 3,
            max: 100,
            message: 'Length should be 3 to 100',
            trigger: 'blur',
        },
    ],
    email: [
        {
            required: true,
            message: 'Fill in "Email" field',
            trigger: 'blur',
        },
        {
            type: 'email',
            message: 'Please input valid email address',
            trigger: ['blur', 'change'],
        },
    ],
})

const onSubmit = async (el: FormInstance | undefined) => {
    if (!el) return
    await el.validate((isValid, fields) => {
        if (isValid) {
            console.log(form)
        } else {
            console.error('Provide valid values for those elements:', fields)
        }
    })
}
</script>

<style scoped lang="scss">
.el-link {
    display: block;
}

::v-deep .el-form-item {
    display: block;

    &__label {
        display: block;
    }
}
</style>
