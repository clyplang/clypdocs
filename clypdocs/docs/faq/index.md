---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
slug: /faq/
---

Q: How do I import Python modules?
A: Use `pyimport module` to import directly using Python's import system.

Q: How are types enforced?
A: The generated Python code installs `typeguard` import hook and performs
runtime checks. See `/docs/types` for details.
