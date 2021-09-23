<template>
  <main class="mb-8 duration-300 rounded-xl bg-white shadow-white dark:(bg-dark-900 shadow-black) h-100 p-4">
    <PageTitle title="Users">
      <UsersIcon />
    </PageTitle>
    <div class="w-full">
      <div class="table empty-cells-hidden w-full">
        <div class="table-caption">Liste des utilisateurs</div>
        <div class="table-header-group">
          <div class="table-row">
            <div class="table-cell">Id</div>
            <div class="table-cell">Nom</div>
            <div class="table-cell">Email</div>
            <div class="table-cell">Actions</div>
          </div>
        </div>
        <div class="table-row-group">
          <div class="table-row" v-for="user in users" :key="user.id">
            <div class="table-cell">{{user.id}}</div>
            <div class="table-cell">{{user.username}}</div>
            <div class="table-cell">{{user.email}}</div>
            <div class="table-cell">
              <div class="flex">
                <DeleteButton class="mr-2" />
                <UpdateButton />
              </div>
            </div>
          </div>
        </div>
        <div class="table-footer-group">
          total : {{ users.length }}
        </div>
      </div>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: default
  auth: true
</route>

<script setup lang="ts">
import { useAxios } from '~/logic/axios'

const axios = useAxios()
const users = ref<Array<any>>([])

onMounted(async() => {
  const response = await axios.get('/users')
  if (response.status === 200) {
    response.data.users.forEach((user: any) => {
      return users.value.push(user)
    })
  }
})
</script>
