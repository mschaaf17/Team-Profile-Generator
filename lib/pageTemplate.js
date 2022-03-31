
function createPage(employees) {
    if(!employees[0]) {
        return ''
    }


	// if (employees[i].office){
	let employeeCards = ""
	for(i = 0; i < employees.length; i++) {
		let option = ""
		let icon = ""
		if (employees[i].office) {
			option = "Office Number: " + employees[i].office
			icon = '<img src="https://img.icons8.com/small/32/000000/coffee.png"/>'
		} else if (employees[i].school) {
			option = "School: " + employees[i].school
			icon = '<img src="https://img.icons8.com/windows/32/000000/internship.png"/>'
		} else {
			option = "GitHub: " +  employees[i].github
			icon = '<img src="https://img.icons8.com/windows/32/000000/glasses.png"/>'
		}
		employeeCards = employeeCards + `
		<div class="border rounded flex-col flex-wrap h-auto w-auto">
			<div class="border bg-slate-300 p-5">
			<h1 class="text-[32px]" > ${employees[i].name}</h1>
			<h2 class="text-[28px]"> ${employees[i].role} ${icon}</h2>
			</div>
				<div class="text-[18px] border">
				<p class="p-2">ID: ${employees[i].id} </p>
				<a class="p-2" href ="mailto:${employees[i].email}">Email: ${employees[i].email}</a>
				<p class="p-2"> ${option}</p>
				<a class = "p-2" href =
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