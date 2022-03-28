

// module.exports = userResponses => {
//  const myTeam = userResponses

function createPage(employees) {
    if(!employees[0]) {
        return ''
    }
	let employeeCards = ""
	for(i = 0; i < employees.length; i++) {
		employeeCards = employeeCards + `
		<div class="border rounded">
			<div class="border bg-slate-300">
			<h1 class="p-3 text-[32px]" > ${employees[i].name}</h1>
			<h2 class="p-3 text-[28px]"> ${employees[i].role}</h2>
			</div>
				<div class="text-[18px]">
				<p class="p-2">ID: ${employees[i].id} </p>
				<a class="p-2" href ="mailto:${employees[i].email}">Email: ${employees[i].email}</a>
				<p class="p-2">Other--- ${employees[i].office}school github or office #</p>
				</div>
		</div>
		`
	}
return `    
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="https://cdn.tailwindcss.com"></script>
	<title >Team Builder</title>
</head>
<body class="">
	<header class="text-[64px] text-center text-cyan-600">My Team</header>
	<main> moneysign maybe if created as parameter!!!{myTeamCreated(employees)}</main>
    <div class= "flex justify-around p-5 flex wrap">
		${employeeCards}
		</div>
		
</body>
</html>
`}
module.exports = createPage