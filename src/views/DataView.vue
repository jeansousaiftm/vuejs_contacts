<script setup>
	import ContactDataService from "../services/ContactDataService.js";
</script>

<template>
	
	<h1>Contact Detail</h1>
	<br/>
	<div class="container_detail">
		<div>
			<label>Name: </label>
			<input type="text" name="name" v-model="contact.name" />
		</div>
		<div>
			<label>E-mail: </label>
			<input type="mail" name="email" v-model="contact.email" />
		</div>
		<div>
			<label>Contact: </label>
			<input type="text" name="contact" v-model="contact.contact" />
		</div>
		<div>
			<label>Image: </label>
			<input type="file" name="image_upload" @change="uploadImage" />
		</div>
		<div class="imgContent" v-if="contact.image != ''">
			<label>Actual Image: </label><br/>
			<img id="actual_image" v-bind:src="contact.image" />
		</div>
		<div>
			<button type="button" @click="save()">Save</button>
			<input type="hidden" name="id" v-model="contact.id" />
			<input type="hidden" id="image" name="image" v-model="contact.image" />
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
		},
		methods:{
			
			uploadImage() {
			
				var image = document.querySelector('input[type=file]').files[0];
				var reader = new FileReader();
				
				reader.onload = function(e) {
					document.getElementById("image").value = e.target.result;
					document.getElementById("actual_image").src = e.target.result;
				};
				
				reader.readAsDataURL(image);  
				
			},
		
			save() {
				
				this.contact.image = document.getElementById("image").value;
				
				ContactDataService.save(this.contact);
				
				this.$router.push("/");
			}
		}
	};
</script>

<style>
	.container_detail{
		display: block;
		min-width: 100%;
	}
</style>