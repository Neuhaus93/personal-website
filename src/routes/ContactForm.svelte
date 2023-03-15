<div class="container">
	<form
		target="_blank"
		action="https://formsubmit.co/lucas.neuhaus93@gmail.com"
		method="POST"
	>
		<label for="name" class="col-span-2 sm:col-span-1">
			<span>Full Name</span>
			<input
				id="name"
				type="text"
				name="name"
				placeholder="Full Name"
				required
			/>
		</label>
		<label for="email" class="col-span-2 sm:col-span-1">
			<span>Email</span>
			<input
				id="email"
				type="email"
				name="email"
				class="form-control"
				placeholder="Email Address"
				required
			/>
		</label>
		<label for="message" class="col-span-2">
			<span>Message</span>
			<textarea
				id="message"
				placeholder="Your Message"
				class="form-control"
				name="message"
				rows="10"
				required
			/>
		</label>
		<button
			type="submit"
			class="btn col-span-2 float-right justify-self-end px-10">Send</button
		>
	</form>
</div>

<style lang="postcss">
	form {
		@apply grid grid-cols-2 gap-y-4 gap-x-3;
	}

	label input,
	label textarea {
		@apply mt-1.5;
	}

	input,
	textarea {
		@apply w-full appearance-none rounded-md p-3 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500;
	}
</style>
