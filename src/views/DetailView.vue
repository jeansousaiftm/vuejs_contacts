<script setup>
	import ContactDataService from "../services/ContactDataService.js";
</script>

<template>
	
	<h1>Contact Detail</h1>
	<br/>
	<div class="container_detail">
		<div>
			<h4><label>Id: </label>{{ this.$route.params.id }}</h4>
		</div>
		<div>
			<h4><label>Name: </label>{{ contact.name }}</h4>
		</div>
		<div>
			<h4><label>E-mail: </label>{{ contact.email }}</h4>
		</div>
		<div>
			<h4><label>Contact: </label>{{ contact.contact }}</h4>
		</div>
		<div class="imgContent">
			<img v-bind:src="contact.image" />
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				contact: null
			}
		},
		beforeMount() {
			this.contact = ContactDataService.firstOrDefault(this.$route.params.id);
		}
	};
</script>

<style scoped>
	.container_detail{
		display: block;
		min-width: 100%;
	}
</style>