function createPage(employees) {
    if(!employees[0]) {
        return ''
    }


	let employeeCards = ""
	for(i = 0; i < employees.length; i++) {
		let option = ""
		let githubAnswer = ""
		let icon = ""
		if (employees[i].office) {
			option = `<p class ="p-2">Office Number: ${employees[i].office}</p>`
			//githubAnswer =""
			icon = '<img src="https://img.icons8.com/small/32/000000/coffee.png"/>'
		} else if (employees[i].school) {
			option = `<p class = "p-2"> School: ${employees[i].school} </p>`
			//githubAnswer = ""
			icon = '<img src="https://img.icons8.com/windows/32/000000/internship.png"/>'
		} else {
			//option = ""
			githubAnswer = `</br><a class = "p-2" href = "https://github.com/mschaaf17" target="_blank">GitHub: ${employees[i].github}</a>`
			icon = '<img src="https://img.icons8.com/windows/32/000000/glasses.png"/>'
		}
		employeeCards = employeeCards + `
		<div class="border rounded flex-col flex-wrap h-auto w-auto">
			<div class="bg-slate-300 p-5">
			<h1 class="text-[32px]" > ${employees[i].name}</h1>
			<h2 class="text-[28px]"> ${employees[i].role} ${icon}</h2>
			</div>
				<div class="text-[18px]">
				<p class="p-2">ID: ${employees[i].id} </p>
				<a class="p-2" href ="mailto:${employees[i].email}">Email: ${employees[i].email}</a>
				${option}
				${githubAnswer}
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
    <div class= "flex justify-around p-5 flex wrap">
		${employeeCards}
		</div>
		
</body>
</html>
`}

module.exports = createPage