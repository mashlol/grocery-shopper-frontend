#!/bin/bash

rm -rf .parcel-cache/
rm -rf dist/
yarn parcel build index.html
firebase deploy