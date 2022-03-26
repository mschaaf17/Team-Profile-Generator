

// module.exports = userResponses => {
//  const myTeam = userResponses

function myTeamCreated(EmployeeData, managerData) {
    if(!EmployeeData) {
        return ''
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
	<main> ${myTeamCreated(EmployeeData)}</main
    <div class= "flex justify-around p-5 flex wrap">
		<!--<div class="border rounded">
			<div class="border bg-slate-300">
			<h1 class="p-3 text-[32px]" >Name: ${EmployeeData.name}</h1>
			<h2 class="p-3 text-[28px]">Role: ${EmployeeData.role}</h2>
			</div>
				<div class="text-[18px]">
				<p class="p-2">ID: ${EmployeeData.id} </p>
				<a class="p-2" href ="http://google.com">Email: ${EmployeeData.email}</a>
				<p class="p-2">Other--- ${managerData.office}school github or office #</p>
				</div>
		</div>
		
</body>
</html>
`}
module.exports = myTeamCreated