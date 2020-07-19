import React, { Component } from "react";
import { Section } from "./Section";

export class Contact extends Component {
    render() {
        return (
            <Section title="Contact" id="Contact">
                <p>If I can help you in any way, if you've got a project you'd like to collaborate on, or you otherwise want to contact me, the quickest way to get in touch is to email me at <a href="mailto:hello@wadefletcher.com">hello@wadefletcher.com</a><sup>4</sup>.</p>
                <p>On <a href="https://github.com/wadefletch">GitHub</a>, <a href="https://twitter.com/wadefletch">Twitter</a>, <a href="https://news.ycombinator.com/user?id=wadefletch">HN</a>, <a href="https://instagram.com/wadefletch">Instagram</a>, and most every other platform, I am @wadefletch.</p>
                <div className="text-xs text-gray-600">
                    <div><sup style={{marginRight: "2px"}}>4</sup>Any email to @wadefletcher.com will make it to me, feel free to mix it up.</div>
                </div>
            </Section>
        );
    }
}