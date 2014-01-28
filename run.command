#! /bin/bash


osascript -e 'tell application "Terminal" to activate' -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down' -e 'tell application "Terminal" to do script "cd ~/projects/chun/responsive_one_pager/dev/public" in selected tab of the front window' -e 'tell application "Terminal" to do script "python -m SimpleHTTPServer" in selected tab of the front window'

cd ~/projects/chun/responsive_one_pager/
compass watch