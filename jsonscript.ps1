$FilePath = "C:\Users\gamer\React\PM DB Uploads\VAIDB.csv"
$update = Import-Csv -Path $FilePath -Delimiter "|" -Encoding ([cultureinfo]::CurrentCulture.TextInfo.ANSICodePage)

$FilePath2 = "C:\Users\gamer\React\PM DB Uploads\JSON\VAIDB.json"

$update | ConvertTo-Json | Out-File $FilePath2