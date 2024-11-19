package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"log"
	"net"
	"os"
	"strings"
	"time"
)

const (
	HOST = "localhost"
	PORT = "4242"
	TYPE = "tcp"
)

func server() {
	listen, err := net.Listen(TYPE, HOST+":"+PORT)
	if err != nil {
		log.Fatal(err)
		os.Exit(1)
	}
	// close listener
	defer listen.Close()
	for {
		conn, err := listen.Accept()
		if err != nil {
			log.Fatal(err)
			os.Exit(1)
		}
		go handleConnection(conn)
	}
}
func handleConnectionSimple(conn net.Conn) {
	// store incoming data
	buffer := make([]byte, 1024)
	_, err := conn.Read(buffer)
	if err != nil {
		log.Fatal(err)
	}

	var objmap map[string]json.RawMessage
	err = json.Unmarshal(buffer, &objmap)
	if err != nil {
		log.Fatal(err)
	}

	time := time.Now().Format(time.ANSIC)
	fmt.Printf("Your message is: %v. Received time: %v", string(buffer[:]), time)
	// respond
	//time := time.Now().Format("Monday, 02-Jan-06 15:04:05 MST")
	//conn.Write([]byte("Hi back!\n"))
	//conn.Write([]byte(time))

	// close conn
	conn.Close()
}

func handleConnection(c net.Conn) {
	fmt.Printf("Serving %s\n", c.RemoteAddr().String())
	for {
		start := time.Now()
		//netData, err := bufio.NewReader(c).ReadString('\n')
		netData, err := bufio.NewReader(c).ReadBytes('\n')
		if err != nil {
			fmt.Println(err)
			return
		}
		temp := strings.TrimSpace(string(netData))

		//var objmap map[string]json.RawMessage
		//err = json.Unmarshal(netData, &objmap)
		//if err != nil {
		//	log.Fatal(err)
		//}

		//result := strconv.Itoa(random()) + "\n"
		//c.Write([]byte(string(result)))
		timeNow := time.Now().Format(time.ANSIC)
		fmt.Printf("Message is: %v. Received time: %v\n", temp[:40], timeNow)
		//fmt.Printf("Received time: %v\n", time)
		elapsed := time.Since(start)
		fmt.Printf("Processed in %s\n", elapsed)
	}
	c.Close()
}
