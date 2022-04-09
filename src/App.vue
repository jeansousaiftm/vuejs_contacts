<script setup>
	import ContactDataService from "./services/ContactDataService.js";
</script>

<template>

	<main>
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link :to="{ path: '/data/'+ ContactDataService.nextId()}">New</router-link></li>
		</ul>
		<div id="app">
			
			<div class="container mt-3">
				<router-view />
			</div>
		</div>
	</main>
	
</template>

<style>

	@import './assets/base.css';

	#app {
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem;
		font-weight: normal;
	}

	a, .green {
		text-decoration: none;
		color: hsla(160, 100%, 37%, 1);
		transition: 0.4s;
	}
	
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #333;
	}

	li {
		float: left;
	}

	li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}
	
</style>

<script>
	
	export default {
		created() {
			ContactDataService.init();
		}
	};

</script>