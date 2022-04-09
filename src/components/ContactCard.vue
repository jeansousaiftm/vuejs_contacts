<template>
	<div class="event-card">
		<div class="content">
			<h4><b>Id: </b><slot name="id"></slot></h4>
			<h4><b>Name: </b><slot name="name"></slot></h4>
			<h4><b>E-mail: </b><slot name="email"></slot></h4>
			<h4><b>Contact: </b><slot name="contact"></slot></h4>
		</div>
		<div class="imgContent">
			<slot name="image"></slot>
		</div>
	</div>
</template>

<style>

	.event-card {
		display: flex;
		height: auto;
		min-height: 100px;
		background: #F9F9F9;
		border-radius: 20px;
		overflow: hidden;
		padding: 10px 15px;
		margin-bottom: 24px;
		margin-right: 10px;
		transition: all 0.2s linear;
		cursor: pointer;
	}
	
	.event-card:hover {
		transform: scale(1.01);
		box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
			0 1px 15px 0 rgba(0, 0, 0, 0.19);
	}

	.content {
		width: 70%; 
		float: left;
	}

	.imgContent {
		width: 30%; 
	}
	
	.imgContent img {
		max-height: 100%;
		max-width: 100%;
	}

</style>