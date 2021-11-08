if __name__ == '__main__':
    N = int(input())
    arr = []
    for i in range(N):
        string = input()
        str_ar = string.strip().split(" ")
        command = str_ar[0]
        if command == "print":
            print(arr)
        elif command == "sort":
            arr.sort()
        elif command == "reverse":
            arr.reverse()
        elif command == "pop":
            arr.pop()
        elif command == "count":
            val = int(str_ar[1])
            arr.count(val)
        elif command == "index":
            val = int(str_ar[1])
            arr.index(val)
        elif command == "remove":
            val = int(str_ar[1])
            arr.remove(val)
        elif command == "append":
            val = int(str_ar[1])
            arr.append(val)
        elif command == "insert":
            pos = int(str_ar[1])
            val = int(str_ar[2])
            arr.insert(pos, val)
