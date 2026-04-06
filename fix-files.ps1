# fix-files.ps1
Write-Host "Fixing Next.js to React conversion..." -ForegroundColor Green

# Get all JSX and JS files
$files = Get-ChildItem -Path .\src -Recurse -Include *.jsx, *.js

foreach ($file in $files) {
    Write-Host "Processing: $($file.Name)" -ForegroundColor Yellow
    $content = Get-Content $file.FullName -Raw
    
    # Remove "use client" directives
    $content = $content -replace '"use client";?\r?\n', ''
    $content = $content -replace "'use client';?\r?\n", ''
    
    # Replace next/link imports
    $content = $content -replace 'import Link from "next/link"', 'import { Link } from "react-router-dom"'
    $content = $content -replace "import Link from 'next/link'", "import { Link } from 'react-router-dom'"
    
    # Replace next/navigation imports
    $content = $content -replace 'import { useRouter } from "next/navigation"', 'import { useNavigate } from "react-router-dom"'
    $content = $content -replace "import { useRouter } from 'next/navigation'", "import { useNavigate } from 'react-router-dom'"
    
    # Replace useRouter with useNavigate
    $content = $content -replace 'const router = useRouter\(\)', 'const navigate = useNavigate()'
    $content = $content -replace 'router\.push', 'navigate'
    
    # Replace href= with to= on Link components
    $content = $content -replace 'href=', 'to='
    
    # Remove next/image imports
    $content = $content -replace 'import Image from "next/image"\r?\n', ''
    $content = $content -replace "import Image from 'next/image'\r?\n", ''
    
    # Replace Image components with img (simple version)
    $content = $content -replace '<Image', '<img'
    $content = $content -replace 'fill\r?\n', ''
    $content = $content -replace '\s+fill', ''
    
    # Save the file
    Set-Content -Path $file.FullName -Value $content -NoNewline
}

Write-Host "`nFix complete! Please review changes." -ForegroundColor Green
