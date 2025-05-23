import {assert, expect} from "chai"
import app from "../app.js"

describe("The Add function",function(){
  it("Should add 2 numbers together",function(){
    const res = app.add(2,2)
    assert.equal(res,4)
    expect(res).to.be.eq(4)
  })

  it("Should be able to handle 1 number",function(){
    const res = app.add(2)
    expect(res).to.be.eq(2)
  })

  it("Should be able to handle 0 number",function(){
    const res = app.add()
    expect(res).to.be.eq(0)
  })

  it("Should return 0 if either of the argument is not a number",function(){
    const res = app.add(2,"test")
    expect(res).to.be.eq(0)
  })
})

describe("The Subtract function",function(){
  it("Should subtract 2 numbers together",function(){
    const res = app.subtract(5,2)
    expect(res).to.be.eq(3)
  })

  it("Should be able to handle 1 number",function(){
    const res = app.subtract(2)
    expect(res).to.be.eq(2)
  })

  it("Should be able to handle 0 number",function(){
    const res = app.subtract()
    expect(res).to.be.eq(0)
  })

  it("Should return 0 if either of the argument is not a number",function(){
    const res = app.subtract(2,"test")
    expect(res).to.be.eq(0)
  })
})

describe("The Multiply function",function(){
  it("Should multiply 2 numbers together",function(){
    const res = app.multiply(5,2)
    expect(res).to.be.eq(10)
  })

  it("Should be able to handle 1 number",function(){
    const res = app.multiply(2)
    expect(res).to.be.eq(0)
  })

  it("Should be able to handle 0 number",function(){
    const res = app.multiply()
    expect(res).to.be.eq(0)
  })

  it("Should return 0 if either of the argument is not a number",function(){
    const res = app.multiply(2,"test")
    expect(res).to.be.eq(0)
  })
})

describe("The Divide function",function(){
  it("Should divide 2 numbers together",function(){
    const res = app.divide(5,5)
    expect(res).to.be.eq(1)
  })

  it("Should be able to handle 1 number",function(){
    const res = app.divide(2)
    expect(res).to.be.eq("Cannot be divided by 0")
  })

  it("Should be able to handle 0 number",function(){
    const res = app.divide()
    expect(res).to.be.eq("Undefined")
  })

  it("Should return 0 if either of the argument is not a number",function(){
    const res = app.divide(2,"test")
    expect(res).to.be.eq(0)
  })
})