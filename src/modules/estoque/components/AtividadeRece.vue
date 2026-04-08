<template>
    <div v-for="atividade in ativadeRecent" :key="atividade.Icon">
        <div class="flex flex-col ">
            <div class="flex items-center gap-2 q-ma-md ">
                <q-avatar :color="atividade.bgcolor" :class="atividade.iconColor" :icon="atividade.Icon" />
                <q-item-section side class="flex flex-col">
                    <q-item-label class="text-black font-semibold">{{ atividade.mensagemPrincipal }}</q-item-label>
                    <q-item-label caption>{{ atividade.mensagemSecundaria }}</q-item-label>
                </q-item-section>
            </div>

        </div>
    </div>

</template>


<script setup lang="ts">
import { reactive } from 'vue';
import type * as interfacesType from "src/modules/estoque/types/InterfacesType.js"


const ativadeRecent = reactive<interfacesType.AtividadeRecent[]>([
    {
        Icon: 'account_circle',
        mensagemPrincipal: 'Novo fornecedor',
        mensagemSecundaria: 'Lucas Shel - 2 horas atrás',
        iconColor: 'text-[#1550EE] ',
        bgcolor: 'blue-2'
    },
    {
        Icon: 'shopping_cart',
        mensagemPrincipal: 'Compra realizada',
        mensagemSecundaria: 'Order #456 - 4 horas atrás',
        iconColor: 'text-[#16A31C] ',
        bgcolor: 'green-2'
    },
    {
        Icon: 'notifications',
        mensagemPrincipal: 'Nova notificação',
        mensagemSecundaria: 'Produto X - 6 horas atrás',
        iconColor: 'text-[#9333EA] ',
        bgcolor: 'purple-2'
    },
    {
        Icon: 'refresh',
        mensagemPrincipal: 'Atualização',
        mensagemSecundaria: 'Versão 2.3.5 - 1 dia atrás',
        iconColor: 'text-[#E95304] ',
        bgcolor: 'orange-2'
    },
    {
        Icon: 'account_circle',
        mensagemPrincipal: 'Novo fornecedor',
        mensagemSecundaria: 'Lucas Shel - 2 horas atrás',
        iconColor: 'text-[#1550EE] ',
        bgcolor: 'blue-2'
    },
    {
        Icon: 'shopping_cart',
        mensagemPrincipal: 'Compra realizada',
        mensagemSecundaria: 'Order #456 - 4 horas atrás',
        iconColor: 'text-[#16A31C] ',
        bgcolor: 'green-2'
    },
    {
        Icon: 'notifications',
        mensagemPrincipal: 'Nova notificação',
        mensagemSecundaria: 'Produto X - 6 horas atrás',
        iconColor: 'text-[#9333EA] ',
        bgcolor: 'purple-2'
    },
    {
        Icon: 'refresh',
        mensagemPrincipal: 'Atualização',
        mensagemSecundaria: 'Versão 2.3.5 - 1 dia atrás',
        iconColor: 'text-[#E95304] ',
        bgcolor: 'orange-2'
    },


])

</script>
