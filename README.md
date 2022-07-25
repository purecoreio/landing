# Prerequisites
- you must execute all the listed commands with ``bash``
- on the first install, run ``npm install``

# How to launch
- if you want to use the latest public purecore-js release, do ``npm run dev``
- if you want to develop along a local unreleased version of purecore-js, first do ``npm run dev`` on the purecore-js client, then do ``npm run ldev`` here (local dev)
- if you want to develop using ``ldev`` + purecore-js test mode (local endpoints passthru), follow the instructions of the previous point and instad of ldev use ``npm run lldev`` (local+local dev)

# How to build
> builds will always feature the latest publicly available non-snapshot version of purecore-js
- you can use ``npm run build``

# Recommended IDE Setup
- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
