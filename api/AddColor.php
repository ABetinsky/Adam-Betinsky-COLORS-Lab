//Adam Betinsky

/*
 PLEASE NOTE:

 1. Lines 16 - 23 were provided by ChatGPT to solve HTTPS and broswer security rule issues.

 2. Lines 30 - 32 were provided by ChatGPT to hide the API keys from the public, while also keeping functionality.

 See the AI Disclosures in the repository for the details on why I used ChatGPT in these scenarios.

 ALL OTHER LINES OF CODE WERE PROVIDED WITH THE ASSIGNMENT
*/

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

	$inData = getRequestInfo();
	
	$color = $inData["color"];
	$userId = $inData["userId"];

	require_once("config.php");

    $conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

	if ($conn->connect_error) 
	{
		returnWithError( $conn->connect_error );
	} 
	else
	{
		$stmt = $conn->prepare("INSERT into Colors (UserId,Name) VALUES(?,?)");
		$stmt->bind_param("ss", $userId, $color);
		$stmt->execute();
		$stmt->close();
		$conn->close();
		returnWithError("");
	}

	function getRequestInfo()
	{
		return json_decode(file_get_contents('php://input'), true);
	}

	function sendResultInfoAsJson( $obj )
	{
		header('Content-type: application/json');
		echo $obj;
	}
	
	function returnWithError( $err )
	{
		$retValue = '{"error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}
	
?>
