1. 파일 시스템 탐색 기본 명령어



_1) pwd : 현재 작업중인 디렉토리를 출력

ex) /home/vagrant/git/bitcamp-test



_2) cd : 작업 디렉토리의 위치 변경



_3) ls : 현재 작업중인 디렉토리의 파일 목록 출력

ex) file1.txt  file2.txt  g1.txt  README.md



_4) file : 파일의 종류와 속성값 출력

ex) a.txt: ASCII text



_5) less : 파일을 읽어 내용을 출력

ex) 1234

a.txt (END)

 



2. 파일과 디렉토리 조작 명령어



_1) cp : 파일 복사

ex) cp [복사할 파일명] [복사된 파일명]

ex) cp [복사할 파일명] [복사할 디렉토리]



_2) mv : 파일의 위치 변경

ex) mv [파일명] [이동시킬 디렉토리]



_3) mkdir : 디렉토리 생성

ex) mkdir [디렉토리명]



_4) rm : 파일 삭제

ex) rm [파일명]



_5) ln : 파일의 링크 생성

ex) ln [파일명] [생성할링크명]

=> 링크를 통해 파일에 접근가능



 

3. 명령어를 다루는 명령어



_1) type : 명령어의 상태 확인

ex) type test

=> test is a shell builtin



_2) which : 명령어의 실행되는 위치 확인

ex) which ls

=> /usr/bin/ls



_3) man : 명령어의 매뉴얼 확인

ex ) man mv

MV(1)      User Commands      MV(1)



NAME

       mv - move (rename) files



SYNOPSIS

       mv [OPTION]... [-T] SOURCE DEST

       mv [OPTION]... SOURCE... DIRECTORY

       mv [OPTION]... -t DIRECTORY SOURCE...



DESCRIPTION

       Rename SOURCE to DEST, or move SOURCE(s) to DIRECTORY.

       Mandatory arguments to long options are mandatory for short options too.

       --backup[=CONTROL]

              make a backup of each existing destination file

       -b     like --backup but does not accept an argument ....



_4) apropos : 명령어 검색

ex) apropos [검색어]



_5) info : 명령어의 상세 메뉴얼 확인



_6) whatis : 명령어의 간략한 설명 확인

ex ) whatis ls

ls (1)               - list directory contents

ls (1p)              - list directory contents



_7) alias : 명령어의 별칭 등록

ex) alias mkafile='touch a.txt'

=> mkafile 입력 시 touch a.txt명령어 실행