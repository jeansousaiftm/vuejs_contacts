<script setup>
	import ContactCard from '@/components/ContactCard.vue';
	import ContactDataService from "../services/ContactDataService.js";
</script>

<template>
	<h1>Contact Cards</h1>
	<br/>
	<div class="container">
		<ContactCard v-for="contact in $local.contacts.filter(x => x !== null)" class="child" @click="detail(contact.id)">
			<template #id>{{ contact.id }}</template>
			<template #name>{{ contact.name }}</template>
			<template #email>{{ contact.email }}</template>
			<template #contact>{{ contact.contact }}</template>
			<template #image><img v-bind:src="contact.image" /></template>
		</ContactCard>
	</div>
	<br/>
	<h1>Contact List</h1>
	<div class="container">
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Edit</th>
					<th>Del</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="contact in $local.contacts.filter(x => x !== null)">
					<td>{{contact.id}}</td>
					<td>{{contact.name}}</td>
					<td>
						<router-link :to="{ path: '/data/'+ contact.id}">Edit</router-link>
					</td>
					<td>
						<a @click="deleteContact(contact.id)">Del</a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<confirm-popup ref="confirmPopup"></confirm-popup>
</template>

<script>

	import ConfirmPopup from '../components/ConfirmPopup.vue'

	export default {
		components: { ConfirmPopup },
		methods:{
			detail(id) {
				this.$router.push("/detail/" + id);
			},
			async deleteContact(id) {
				if (await this.$refs.confirmPopup.show()) {			
					ContactDataService.destroy(id);
				}
			}
		}
	};
</script>

<style scoped>	
	.container{
		display: flex;
		flex-wrap: wrap;
		min-width: 100%;
	}
	.child {
		width: 30%;
		box-sizing: border-box;
	}
	
	.table {
		border-collapse: collapse;
		width: 100%;
	}
	
	.table td, .table th {
		border: 0.5px solid;
	}
	
	.table tr:nth-child(even){
		background-color: #f2f2f2;
	}

	.table th {
		font-weight: bold;
	}
	
</style>