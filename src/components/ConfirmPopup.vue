<template>
    <transition name="fade">
        <div class="popup-modal" v-if="isVisible">
            <div class="window">
                <p>Are you sure?</p>
				<div class="btns">
					<button class="cancel-btn" @click="_cancel">Cancel</button>
					<button class="ok-btn" @click="_confirm">Confirm</button>
				</div>
            </div>
        </div>
    </transition>
</template>

<script>

	export default {

		data: () => ({
			isVisible: false
		}),

		methods: {
			show() {
				this.open();
				return new Promise((resolve, reject) => {
					this.resolvePromise = resolve
					this.rejectPromise = reject
				});
			},
			
			_confirm() {
				this.close();
				this.resolvePromise(true);
			},

			_cancel() {
				this.close();
				this.resolvePromise(false);
			},
		
			open() {
				this.isVisible = true;
			},

			close() {
				this.isVisible = false;
			},
		}
	};
</script>

<style scoped>

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.popup-modal {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		z-index: 1;
	}

	.window {
		background: #fff;
		border-radius: 5px;
		box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
		max-width: 480px;
		margin-left: auto;
		margin-right: auto;
		padding: 1rem;
	}
	
	.btns {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	
</style>