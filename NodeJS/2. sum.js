n = process.argv.length
total = 0
i = 2
while (i<n) {
	total += +process.argv[i]
  i++
}
console.log(total)
