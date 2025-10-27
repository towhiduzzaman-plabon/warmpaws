import React from 'react'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-16">
      <aside>
        <img src="/paw.png" className="w-10 h-10" />
        <p>WarmPaws<br/>A cozy winter companion for pet care.</p>
      </aside>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover">support@warmpaws.app</a>
        <a className="link link-hover">+1 (555) 013-7777</a>
        <a className="link link-hover">Dhaka, Bangladesh</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Terms of use</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Twitter</a>
      </nav>
    </footer>
  )
}

export default Footer
