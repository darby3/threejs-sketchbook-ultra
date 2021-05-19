#!/bin/bash

find -s ./components/99-starters -type f -name README.md -exec bash -c "echo -n '## ' && echo {} | cut -d/ -f4" \; -a -exec cat {} \; -a -exec bash -c "echo -n {} | cut -d/ -f4 | sed 's/^...//' | awk '{print \"\n[Link](/components/detail/\"\$0\")\"}'" \; > docs/starters-list.md

echo '### Built on' >> docs/starters-list.md
echo `date` >> docs/starters-list.md

