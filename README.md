# Aggregated report assignment

## Assignment

1. Create a folder called ‘results’ with the given JSON files. The filenames are safari.json, chrome.json and edge-chromium.json.
2. Use node core modules for reading files.
3. Generate aggregated output (from the .json files in #1) grouped by “feature” property, located in the JSON file “.fixtures[0].meta.feature”.
4. The output file name should be the name of the feature with timestamp.
5. Aggregated results output file should include total test results and compilation array of “.fixtures[0].tests”. The output file named ‘aggregated-results.json’ is attached for reference here. 

### Preconditions

```
node
```

### Execution

```
node aggregator.js
```

### Result json file name
```
aggregated-results.json
```