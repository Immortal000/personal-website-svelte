<script>
	let currentDate = new Date();
	let year = currentDate.getFullYear();
</script>

<div class="footer">
	<p>copyright &copy; Siddarth Kotthur {year}</p>
</div>

<style lang="scss">
	.footer {
		height: 10vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;

		p {
			height: 100%;
			width: 100%;
			margin-left: 2.5%;
		}
	}
</style>
