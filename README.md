# AWS Auto Scaling Practice

This project is a basic practice to learn how to use **EC2 Auto Scaling**, **Launch Templates**, **Load Balancer**, and simple **stress tests with K6**.  
The objective is to understand how AWS creates more EC2 instances when the CPU usage increases.

---

## 🚀 Project Overview

This practice includes:

- A **Launch Template** for EC2 instances  
- An **Auto Scaling Group** (ASG)  
- A **Target Tracking Scaling Policy** based on CPU usage  
- An **Application Load Balancer** to distribute the traffic  
- A simple **K6 test** to generate load

The Auto Scaling Group is configured to **create new EC2 instances automatically** when CPU usage goes over the target value.

---

## ⚙️ Auto Scaling Configuration

- **Minimum instances:** 1  
- **Desired instances:** 1  
- **Maximum instances:** 3  
- **Scaling Policy:** Target Tracking  
- **Metric:** Average CPU Utilization  
- **Target Value:** 15%  
- **Instance Type:** t3.micro  
- **AMI:** Amazon Linux 2  

When the CPU is higher than the target, AWS launches more EC2 instances automatically.

---

## 🌐 Load Balancer

The Application Load Balancer (ALB) is used to send traffic to the instances inside the Auto Scaling Group.

- **Type:** Application Load Balancer  
- **Port:** 80  
- **Target Group:** Linked to Auto Scaling Group  

---

## 🔥 K6 Load Test

The K6 script sends several HTTP requests to the Load Balancer to simulate traffic.

### Example script (`test.js`):

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '3m',
};

export default function (
