<div class="box">
	<h1 class="title">Projects</h1>
	<ul class="list">
		@foreach($projects as $project)
			<li><strong>{{ $project->name }} </strong> {{ $project->description }} </li>
		@endforeach
	</ul>
</div>