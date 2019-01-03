"use strict";

import('/errors.js').then(module => {
  this[Symbol('asd')] = module;
}).catch(err => {
  console.log(err);
});
//import {AccessError as ae} from '/errors.js';

class Prototype {
  [Symbol.iterator]() {
    //for (const i of this) {}
  }
  constructor() {
    const foo = Symbol("foo");
    this._name = name;
    this[foo] = 'bar';
    return new Proxy(this, {
      get(target, name) {
        if (name.startsWith('_') || typeof(target[name]) === 'symbol') {
          throw new ae(String.raw`Accessing to a private property ${name} is not allowed`);
        } else {
          return target[name];
        }
      }
    });
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  greeting(person) {
    return `hi ${person.name}`;
  }
}
/*
class Elipse {
        constructor(r1, r2) {
            this._r1 = r1;
            this._r2 = r2;
            return new Proxy(this, {
                get(target, name) {
                    if (name.startsWith('_')) {
                        throw new ae('Accessing to a private property is not allowed');
                    } else {
                        return target[name];
                    }
                }
            });
        }
        get r1() {
            return this._r1;
        }
        get r2() {
            return this._r2;
        }
        set r1(r) {
            this._r1 = r;
        }
        set r2(r) {
            this._r2 = r;
        }
    }

class Circle extends Elipse {
        constructor(r) {
            super(r,r);
            return new Proxy(this, {
                get(target, name) {
                    if (name.startsWith('_')) {
                        throw new Error('Accessing to a private property is not allowed');
                    } else {
                        return target[name];
                    }
                }
            });
        }
        get r() {
            return (this._r1 || this._r2);
        }
        set r(r) {
            this._r1 = r;
            this._r2 = r;
        }
        set r1(r) {
            this._r1 = r;
            this._r2 = r;
        }
        set r2(r) {
            this._r1 = r;
            this._r2 = r;
        }
    }

(behaviour => {
    behaviour.clientMixin = superclass =>  class extends superclass {
        //properties
         get secret() {
          return this.password;
        }
         constructor() {
            super();
             //public fields
             this.port = 502;
            this.address = "localhost";
            this.period = 1;
            this.login = "admin";
           //private fields
            let password = "admin";
           //methods
            this.ChangePassword = (password) => {
                if (typeof value != "undefined")
                    password = value;
            }
            this.Connect = (address, port) => {
                if (super.Connect) {
                    super.Connect(address, port);
                } else {
                    super.Open();
                    this.Authenticate();
                    super.Send();
                    super.Receive();
                    super.Close();
                }
            }
            this.Authenticate = () => {
                if (typeof value != "undefined") {
                    password = value;
                }
            }
        }
    }

    behaviour.serverMixin = superclass => class extends behaviour.clientMixin(superclass) {
        constructor() {
            super();
            this.StartListen = () => {
                if (super.Open()) {
                    console.log(this.constructor.name + " listening on port " + this.port);
                } else {
                    throw "Can't bind to port";
                }

                if (super.Receive())
                    super.Send();
            }
        }
    }
})(window.behaviour = window.behaviour || {});

((myModule) => {
    myModule.myBaseClass = class {
        constructor() {}
    }
    myModule.myClass = class extends behaviour.serverMixin(myModule.myBaseClass) {
        constructor() {
            super();
        }
    }
})(window.myModule = window.myModule || {});

(connection => {
    connection.ConnectionPrototype = class {
        constructor(...args) {
            this.open = (...args) => {
            }
            this.close = (...args) => {
            }
            this.send = (...args) => {
            }
            this.receive = (...args) => {
            }
        }
    }
    connection.SerialPortMixin = superclass => class extends superclass {
        constructor() {
            super();
            let serialport = require("serialport");
            this.serial = new SerialPort(port, {
                baudrate: baudrate,
                autoOpen: false
            });
            let baudrate = 9600;
            let port = "";
            this.open = () => {
                this.serial.open();
            }
            this.close = () => {
                this.serial.close();
            }
            this.setPort = (p) => {
                port = p;
            }
            this.getPort = () => {
                return port;
            }
            this.setBaudrate = (b) => {
                this.serial.update(b);
                baudrate = b;
            }
            this.getBaudrate = () => {
                return baudrate;
            }
        }
    }

    connection.NetworkMixin = superclass => class extends superclass {
        constructor(...args) {
            super(...args);
            this.open = () => {
                return;
            }
            this.close = () => {
                return;
            }
            this.send = (url, data) => {
                return fetch(url, {
                    method: 'POST',
                    body: data
                });
            }
            this.receive = (url) => {
                return fetch(url, {
                    method: 'GET'
                });
            }
        }
    }

    connection.NetworkMixinMock = superclass => class extends mixin.mix(connection.ConnectionPrototype).with(superclass) {

        constructor(...args) {

            super(...args);



            this.open = () => {

                return {};

            }

            this.close = () => {

                return {};

            }

            this.send = (url, data) => {

                return {

                    url,

                    data

                };

            }

            this.receive = (url) => {

                return {

                    url

                };

            }

        }

    }



    connection.SQLMixin = class extends mixin.mix(connection.ConnectionPrototype).with(NetworkMixin) {

        constructor(...args) {

            super(...args);



            this.open = () => {

                return;

            }

            this.close = () => {

                return;

            }

            this.send = (url, query) => {

                if (super.send)

                    return super.send(url, query);

            }

            this.receive = (url, query) => {

                return;

            }

        }

    }

})(window.connection = window.connection || {});









(driver => {

    driver.ModbusMixin = superclass => class extends superclass {

        constructor() {

            super();



            client.connectRTU(super.port, {

                baudrate: 9600

            }, write);

        }

    }



    driver.ModbusRTUMixin = superclass => class extends driver.ModbusMixin(superclass) {

        constructor() {

            super();



            let modbusRTU = require("modbus-serial");

            this.client = new modbusRTU(super.serial);



            this.connect = () => {

                super.open();

            }



            this.send = (addr, values) => {

                this.client.writeRegisters(addr, values);

            }



            this.receive = (addr, num) => {

                this.client.readHoldingRegisters(addr, num);

            }



            this.close = () => {

                super.close();

            }



            this.setUnitID = (ID) => {

                this.client.setID(ID);

            }



            this.getUnitID = () => {

                return this.client.getID();

            }

        }

    }



    driver.ModbusTCPMixin = superclass => class extends driver.ModbusMixin(superclass) {

        constructor() {

            super();

        }

    }

})(window.driver = window.driver || {});









(device => {

    device.ModbusTCPDevicePrototype = class extends driver.ModbusTCPPrototype {



    }



    device.ModbusRTUDevicePrototype = class extends driver.ModbusTCPPrototype {



    }



    device.ModbusRTUSlaveDevice = class extends mixin.mix(driver.ModbusRTUDevicePrototype).with(behaviour.ServerMixin) {



    }



    device.ModbusTCPPollDevice = class extends mixin.mix(driver.ModbusTCPDevicePrototype).with(behaviour.ClientMixin) {



    }

})(window.device = window.device || {});
*/