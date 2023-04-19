import machine
import hcsr04
import time

import network
import uwebsockets.client as websocket
import json

def wlan_connect(ssid,pwd):
    wlan = network.WLAN(network.STA_IF)
    if not wlan.active() or not wlan.isconnected():
        wlan.active(True)
        wlan.connect(ssid,pwd)
        while not wlan.isconnected():
            pass
    print('network config:', wlan.ifconfig())
    #upip.install("")

wlan_connect('Galaxy F41E4AB', 'rhuu5631')

uri = "wss://gtg3p8yh66.execute-api.us-east-1.amazonaws.com/production/"
ws = websocket.connect(uri)

ultrasonic = hcsr04.HCSR04(trigger_pin=13, echo_pin=12, echo_timeout_us=1000000)

while True:
    distance = ultrasonic.distance_cm()
    distance1 = ultrasonic.distance_mm()
    print('Distance:', distance, 'cm', '|', distance1, 'mm')
    ws.send(json.dumps(distance))
    time.sleep_ms(1000)

