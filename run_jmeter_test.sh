rm test03-result-file
rm -r ./test03-web-report/
./jmeter -n -t test03-6000.jmx -l test03-result-file -j test03-log
./jmeter -n -t test03-9000.jmx -l test03-result-file -j test03-log
./jmeter -n -t test03-12000.jmx -l test03-result-file -j test03-log
./jmeter -g test03-result-file -o ./test03-web-report/ -Jjmeter.reportgenerator.overall_granularity=1000