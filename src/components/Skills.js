import './Skills.css'
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import {motion} from 'framer-motion'





export const Skills = (props) => {


        

return (
<div>   


<motion.div
initial={{x:-1000}} animate={{x: 30 }} transition={{delay:0.2}}
className='skill-div'
>
   
<Row>

<h1 className='skill-head' >Python :</h1>   


<p className='skills'> The first ever language i learned and i have 2+ years of experience using python.</p>


<Col>
<motion.p animate={{x:35}} className='small-txt' >Here is some of the code i have written in python : <li ><a href='https://github.com/'><motion.img whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,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' height={50} width={50} /></a></li>
</motion.p>
</Col>

<Col>
<motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} whileHover={{scale : 1.3}} className='Git' src='data:image/webp;base64,UklGRrIEAABXRUJQVlA4WAoAAAAQAAAAgAAAgAAAQUxQSBcBAAARDzD/ERECbm1bcZ3L8kBICZRCaVAapVAC4R9YeoGe79VgO47o/wTAtwpxM6vcMDOL1NoVylymex/E8CIxvUQ8vKwVYqUlxceuMh9T2TxjwrjBxzwvPqS0JPP/vv12s2U/T0sAulEFwOQMwBICsGkmfKApCV0bSj5iKuWIh1KPWNczrjrbxR5S2QUqa2lJ0TH2Y5OCVGFKakwCgNAZuIMo3oNInhGx7SbzMYx0wtJMatxmVrs2tCmVAx4UDlpSFtZp9YiHWd5OKUdMJWsJQ+tK1D7QlAAoADauAlhcBjC5CKB7AfTvsf8n1C6VJuUDcMq6TWnMY1e7ZKMS07EDCtG9TDQvEfAis5zAzF0F23aJwsPMII6CHwEAVlA4IHQDAADQEwCdASqBAIEAPpFEn0olo6MhpTdqsLASCWRu4MAC/AB/5wT/O9nR3/qvNx8JzPX1vQHyZ/AP/TewD9FbyTzAfsp6zHpH/0nqAf1r/R9aF6Dvl0eyb+7fpQAmxE3TUE0jk5xRpEF4sVhiH2ZFJN1JRi+2HFO7gFKoFizx/lBSqqX3GT64UdILdBZ3yyAgLVjj5TdRakEUrFm3F2jlbWPn6a+z7hqOAAD+s9wXmYtFL2eyUDcAJOl8z1CCmvH0Diir38T+5uTGlUseVio3NbgVCvKUBtFxtNlpk7zuwji+qd3+FtRM2aXRIilQf2xlgLj6OUsGoJOBuYHGtE+20LO8r0Bid2c7o3AfkxYivzOzGtq8aDDZ5QJVAFWwkWPdpUwbeGshs4mEh7QBwqXGGNiv67Nv5/U5DC7CeLb2OgrhQVpy9k2g7mJXLiWYdArH3Mhf325X6m/ej09blfqb9543FeAFUbJCICuRMp3c9m8X3xQTZUMuCZQEI1dswgOqplXVbtkKViqz/jX6Z+rPMXNYoxYWKszinaDD5FAdG8uuV4kB2qZ81qgZjqT61b00tsGql6lHC9JcjJDmbShbqU8DnqUHm7B8Uuw+D2pS+GiMWThCV2Tphmhuz/1p7rofpd5wHSn7rX0G/VjRGjzNB4G4P/32xDPIRRW67LBugsX89kjpLGnSdvF7IKQexmJWRZuAwlkKZgJjbTrGmuOKN9eZ88OuX+BKsJ411N1VM2y3IH3z2JrL8FDCfpA8FC37DNijz/7T5YYXqsJEjVD1HFfrtT1/3fynbhjQEXBMxUbJquFIdezvqpEpC8o+PmDYQZhtG7xAkgP0QX7wnOhDmHsDcaU581NEKxUZIsIzahtS/X/7ACAMS38cevV5//60VGmRLtjwN18BDOwY5oV96OoeN3VwzU10Ak7+dgX/EuuDl3YD7xsIhlWcb4rUs1II3f0jN8Yx0LWsMpy/JiLxXif/7Ex/4FD/EYchDgmAVVa4KvTmAAZsymflVScs7l8Z4yBeWviJDiOq1OiXFRUkR1H96BfzzrWNRLRk4/Wug2xRtjSmqFWkqnjJwrXQylcKEUNDVTNuu2fGrRTzwOKv+l5gRsxwiBlc0AAARVRh82XSggxZaDB26R/eP8lbg4k/jtzyLJ17GTWqeSF/SFvrwRyn+yAAAA==' height={50} width={50} />

</Col>

</Row>
</motion.div>

{/* ------------------------------------------------------ */}

<motion.div
initial={{x:-1000}} animate={{x: 30 }} transition={{delay:0.4}}
className='skill-div'
>
   
<Row>

<h1 className='skill-head' >Java :</h1>   


<p className='skills'> The first ever language i learned and i have 2+ years of experience using python.</p>


<Col>
<motion.p animate={{x:35}} className='small-txt' >Here is some of the code i have written in python : <li ><a href='https://github.com/'><motion.img whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,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' height={50} width={50} /></a></li>
</motion.p>
</Col>

<Col>
<motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAEwCAMAAAAKHvqvAAAArlBMVEX///9TgqH4mB1LfZ5EeZtOf59Mfp5Fepvb4+lBeJpWhKP4kgDC0Ntzl7D4kAD4lACjucnp7vLJ1d/3+frz9vi5ydWNqb1qkazP2uL4lhKftsfk6u9gi6d/n7ayxNHf5uz+9Ot+nrWVr8H96NX+7+H/+/f7zJ/5q1f5r2D93sL82bn4nS/7xpP81bH5pEP5qE73iAD948v6uXf6vYH7zqP5oTsubpP6s2z7x5T5rVyVnqKlAAAS3ElEQVR4nO1daZuavBoeZA2CgrKJgMo7007bt53TaTtt//8fOwlLEkhAwCXOOd790mtkuU2ePHviw8Md7xB70QSG4ceTaAaD8PVZNINBePzPd9EUBmHxRTSDQVguPommMATfNi+iKQzB82axF81hAF43yw+iOQzA6+ZdzPrrZrYQzWEAfkOaj6JJHMfLZjZ/ByppNpvNv4omcRyL2ewdLPXH90Hz8/xd0IT6aDb/KZrFUWzQEvosmsUx/ANFc7b4RzSNY/iBRnNx84EGXECz2c07xj8Rzc0P0TSOAY3l7dvKYjBvXjSfCpabWw+BX5fFYN74nH9fFKI5E83jCDblArpxS/m3oimaRz/+lFM+v23v6FMlmBvRRHrxT8VycdPO0eO8GsubDtH3y1k1mHvRVHqw32wqlresjB6Xm3cw5f9UcglDtRv2OWpNBKf8htPZPwnLG1bsPzDL+W/RXLrxEcvlDS+f/ZcNZnksTPu0vwYjHr4vCMtZ3yJ/+vryvL8Wqzb+YLGcbTbdLJ6+fvzPF3H5hWeK5XLfddWn58ViIS7d+ThbHh/Lxx/L+WbxKk7pfyZiCeVyz7/mZbGczWcC80lEW6I1zhutpw+b+Wa2Wfx7dW6EwsucsFx+41yx/7FAl8x/CSxpPG7IhHNtz/51gQR3I9R6fqYmfLZgs1pPP0q5nf/aX58cxr8Nlqyq+bMoVcDijwByGM+UWG6WzCr+tCk/X85EFtqefhFtOZt/ay/x/cc6vhTqLe1n1OJZvLY//lorU4Fm5wFFuTTL9jJ+qodyI3TCccagZNnODn6vv8NcrOPZZNlePB/qT1lZuCoaLOftaf2NWYoNiPbzPpbYeopdPA9PtIFkmg++4dyM4ETXL5plWy5vhuUrpdWZNf4XsxScQaK9jXnbg/xRy+VS7Bp/eKKd4I+tD3FuZvNLCDmCv5RgtrNZT1gDiO7q+U4NJiOYv+uvsBQYThR4oaKzdp2PKH3RdZZHejD3rQ9fbmYw/1ABeTukIIMpWjLpOWcG85V8JoIaDSoHw1SgSdpQdHJzT2gyXQdkzpei+yYoB45py/yAxVb4CiI02Xzwb5LfFGwoKX3Ejtg3QpOXorkmiEFnuzK/UBpVBDcaWP7mTNmHsBTf1PNcz+ycyXFQo8l4TtfGz3nnaH7rizyuDKw4WZq/KZrCu4/qMWOX0Acq9hDeDfl53qWQvtNR8dEC1qXRXS2nUwyzudCMJllErG6kww/xq6hTN36mZ134tFfRI8dw02sIfg/BftLHcnLZxsx/mzwF9ydUupPt0ntqLCLh3R5fq2lnPvjTkM7Z5q8AchRKy87ZurJpDqfgzGFFhx3OT61pF9xYXLrHTKKL8qAq6RS82kvxZJvgnpY3NZxlhpDjV35vTrvwrVfPaNw4GeE/DZ7CQ/bSpZuzk/rcmHfx/bCo74inGunUvPjorSxocFRjYxmJXkMPVdsrp+WV1p43QLNoIublDijPc3l9ViwQT46f/tiTwxECxJPjp+NgeCk41qgBeXL89J+4iCU6b1xjv9ywfnqdubuROUfYbzZMVF5nHW6pwfhptmxPe+XHC88lNfD0pV3fr2je2jaCby0tXmok0aVqFi9NT+hT0bsnulLAwd+G5kG7apdDsnJrw3Li2Mki90K82mhMMFSby+PLZ+ckQNE1WZNlBUjx9hw01tvId/LAidbHr/08n82PBr9e+PamJokMdFVC0EBonMRw5+e2Bt7e9MDyBt3wZUADkmFW39izUiAXRFUQTKVoODZQZFkHYTZ4Un7OBzR60F/YC0DBU5LNYePQfJKfAl1W0XT4I27fLzajc8WRXM68qo9cS2vfLqRGVcxs3FeclHj3pIqnOkD2MaK0lGwV2NHIF75MU+peKZ+SZg++JTOV8rvp9m7s675OjSqiSj7BatDlXlwtPHiHP/GVk5CWQyMlA65d55ikJJ+fpRtlad6hHrf1cB5Xn4aMSUqSckYL5kGrmCYAvKXdD02q0YmPPcwFEgU1OZ2nt42yOE0UoEPVpoJD3xNjrXxteOyhmS41eALbn2Rp166BTOsB0lMUWauETjf7p9OqZlI+9nhP1qQmUegUhEFmRdte3bn2vK0RrawMWn07VAGALoWs1fSqB+nOkbdH1SCBYzQf1imQpRZUTdN1Bb5aNcPQPqRpUCBNDwc7DBNT1QHipehwXuHIqSpzP/R/ggHTsqpoKkevhOIZm0Buvwm/kUXHldUQwq8npU40zIz5Qye9YuoHEjTmWi+FXnpo/AEwD7FljLB9ebWEhtsh6Fb7+cGsZax/0KqB1jRNRuyAaQeONcEfrxXSMRlm4e1WfrEsJBlJp44kUKmhF/9Hf5bVxE6DOPNXhjvGdWjAHa7e+7D23O3WMCICw9htXdebTKyJSm1K5nkedyGsq8FUrupIjEYuv4fBxI7HWP/2ukhKZSLnpz3mwvF+MNTt6IPnHM7Fh49MKVlKJ2iNXQouLNcWqEzEhPi3gmsDVT9N4x5DxVKbEqVXcIA6zGeZDr9kqY+w5W0cCudKOZOh4cIpWYKjsUU3cn2009LE1ort/mFKi1do6glyVRswKNzZ2KzJDsZoJvKwVCh0nTe7CTI+KjhJXVIhnIz8Wz866gGtt5HlBKFWEqy/Jcj4V1tI8lUQnpjbTGhHU5WRNw5kM4ROm5P51gp5SchVWll+5sRBGpooRkMxZNsdVRKOEYQhDUpS8T4aB5cbbyAXWIacC/cTeZ1FFITcZ87FeEBDqzURKxggwj+fw4h7Npgca1DQdGDmq3X7yTJIz6WRowRox3n0DKMMKQZWexE5AP55ZEqyH7tcVibFb4ihYscrloylvKlduaQTYDghUIbHmmoR+qoHx+Iu4UjT4ouZXxhrhkoRanYsFUgOrSsd6CEMLbtDX2+sDh4Pz1hlcWAnmlKmOgoU/9XN8ACDSxj5XtKyjgeMNGGoCYGCy9uidscdd0zH9qy27ULwE3D7LDPorN12DgrCNWHAop0QU10FbulzKiPTuO7KuaqYhJWroSkB3+Vpw42yIIQuiAzGJ6gnwyOBmwr9M/OQw9htx/MwvG3kFzU17PTJckewdgGAlsMGI6HCLVIT+xAEQY7KRIcw0ZHLJLejJ129FlFH6fZ/iwqG1lshkuUryehB7+QwCBpIr5IEjk+KL7UzB2fd2IVTiWq6foHgrBORPT4QVjVFzq+d83edpLvqylJENW7niuNIM/VTqLWPBcJlfD6onW46E8tJQxmANzgWXLlHKcsiEJabKa1CNxWV39RZXTTE3WYH1JWhoLGwjK3bvTzXOxQIH0IT2qXin2aGNop/jWkEhw+8kUtQ9FQZ2MO79s4Gd1ge1nVURZPGdu2dEfmAkhBUNii3rIH8+uNYwQLH8vtRUrbEgUBgFJFroHc43dq+XLhG1Q8DSHrf505tBIWyXCn9fYM29tEuW0nrhZuC/upVSJqjtCvGAw2sbKBqwOq5IqP9Xf0sNYVxcC3UdquCtHfxtkyxLl8u18zCKLqyVEkG6RE1aLadBk3R02lNhmOAAs8E9amjodGctnn12kO7euM6YIodW7sLuDdrEniq5aCAgCNobCNFJOvcMpoG3Q/Zzid7Eg1y7i7ys7qZs3ZYoe/A95hdlbfm/W5Xt/LLlORQ9JVFu+2gBi7U/VU3cx5CqagkMM2cyqHDv3FAR0bN9QOz6Knlky0eK6MuPUUv+uHMJCnaOKs+zrKXMz3YdpiYqOpXVjiQO9rZzJl19albpqz3hPVrw4qLBsNBJSqqfbPwjYf0ckKC0Kfvb+a0TF3S026WeGALES/aITnF5mmAPj3KkUiH2O9t5nQdWYe2cADLGl7hmocSCiXKRtxJ5IpuTj1JYz86puM8P0SupDotNeZtDbQSUjtBDcR61T6MaufUVBdzjwrsiJhSdCHLqOLmZAO7Od3MLpexbo7eW8EALmAjiiw/y5w4z8tlU6BcTHnsZJlvRcauJ4LiPHWV173M10zejYG3iqEtqprjFO0GSa6NLFVJwA9DsD4PSQS2KyeVAFHT0Bwl0yvX7tkzAq5RdSYR1YzSI/Zp1XU3Biq06qvdiXEcakyCFt1UWpZOLnJM53BxDSd5e3sDQA0PuZPBVTzMqEOlAI16oclCSUe6t2HRy80FSeCf0beFsh4U3kOZgwGlUrRtqIPyPI9jp0AMVRTSUXYYmjKoLmfsAjKtSpFisk7XjzyuO9RPpgJQtkVhjV40TRUo/s+166U5QhUFNQwc/xqbfV0D7SmANklSyj0tpVmSMd/qP8iZKkodilo0qkF5OVXCpwI6lTvkVVo+tEuZUwP+3y+a53rzeXfccccdd9xxx/8x1hiimfTBeAMVBFYJjsPACfib3jt4p3lO3GmeE3ea58Sd5jlxp3lO3GmeE/87NNFRGRfIXK3Rtqihz+2juUad4XJZKwVAOrQbHbcrDN6jI/xpK63pliVSUO4wSwKqlcyIVl4Eb2376J00DVS2adQuVU2RGuUb402v8MbLr+r4U6oauLYCGTQLzppOTljbpr4HVt5bu37Ip4k2V3Jr17JMl3DwFdwSGe5EJ0ccWQfA7zQAdjWizu4hyDPmZEYezd6tqvRRhHl9Ge8Mia3e/jDWuRwrouWAxsZD6rMldx5Nv7eDXCE8I3whp6mgPodJ0uq2x6S3llweimN4UDC3TBacR3PbPFusnfmnGsXwzTpbzsvk9mdx4+wqpqDQd/gBVzaroyZRa4qehGEo1TXQiid+XoCLemzBPsA0a0Grxhe1UgAVPjeRgUJx1XpOtuTSTFXUfhPG1rYmtHNUQpR0qllk1pknJ8xHHkAU9ZScsupFAdVRD7rrMVya2ZvKtt/ERBS0+m/4eAVJYVQnPnmBdJBKIGQWR3l+QoGek6W4NF1uMZGcM0faKO16LJgZ2yrsy/kFW7Kyug84HGPT6w1OlJrMyFC0LsbyoBwroJKjJLpbYsfQZFUM9QqlZUnrU614uqqFQ/31lc5q5igPCYsbWdd4obTPUMRDf/yoyvoIuZ6BH0Wz7lGkVoUjd9xffyXteE+7Uc8SR/tOoVkvGIrmjqikhh3e1c/Vj59P6ioXp0ncj2bzC57IAbtdsYBfkGaH+xEMF82r0OxwP7A+HbDd4ho0iVtJnyaL38xaJxbeWWh6RtF1BlFrnwbNVOX8FSv3bo29do1V+VyH8aVG0nT9PCmP5Skg8WhS7gehVB251nXkk5GlEmoeaT13Ek3XMQG/8bTxcuJ+ULoHiyYn+ogCpeN4mAk0twf2BFYuTeJ+qNj9wKIJmN5NS1I6nfjxNPO+nZVNmsT9wNtUsNZUW6/bJX0BzFiartSI2dSqh4dPk7gfem2Ta2eirY6yxpevDoAiB/yOpLklT0P9dkka5DGEw13plPuBWWHr1/QlaM9aB7JdPjbGFmIcTQ//rXXEMldv0u5HNcdY5Tc3K2WYpaYHVM/2RL2JfTDdbq6ADprkGaB0GOvhURsuPQlYW73O06wQDtP1tqHroPmAhasKKGqHr2mCyLdvedDTaOIZZM6z7KKJhat0NPCwNaq1EVZSbed3Es2o/gsbj3bRjMisI0PkcOc87bh5Is2828510XxoqqQ6VGzGDN2+7ySatQhxDojvpIndD5RpcLlzjjNf7Hn3k2jW93CSgZ00sfuBPqmtUlO3r7p9pik011NoksM/dGrOGwuaRB1npsmmSjppEmWjbIntbFyBLT+7Mk+iyeqjHpqYhGxl1RJsbd3Eo8mGmpMiy+5UCU4F9ugUNQ/r25shJZZNtZ1tcvEWxR6a2LGqaXblMajUGUdX4VfxQg6EHdGtzVn3iZ8zhGYdqQbYpDR+qYQ+g4RD02n70MzcEu/IpKZpG1J7Z8fQXJH7QFw90HUa6WIOTYN6W3lN+wqbOIdq/RWiQ8MB7aaJ7RzJBlD+tQzsOHMCs443OpdQnQjHYPc+W9RzFTVwsvigtCob3TRXtGIu0fhZj8LBxo+pRoRHM2/WaDg5mcZmXlXWcOFJTpJjNIn9oJKBHUdXKobRfZJx1Jh1Zjk/FHv6uVDsOpXTTRMrPCor7XELbHro1XqHG303SABeQjXj8Sz2A1Y+VTdNXKuhjY5nMrGvVv5KgNJNM6W+W8fJ7T4TrqpKcWpxNafdNPHDm78nFDf2Bqu67pRr3iwiTJ3HwgIyRtdh/dvmQUAaSMo1b5T3du/6x3LdSiivs7A8WQZGliDFt/vVHhHOk7wYbyFxuo9CQKexFDkZXQcSPippXd7buY+fZFbYpbk2Vn6W+atzb6z3IivLMmvgb7sUwPqIVce3BGwa5Mk/hXcF7HjZtNsDUeQDf9ZHCHJSyrvBPbg1KKtww4NJsRz4G3gikBOW+s0uc486F0c+4TcqLoq1QzkB8km/8HJJrE3CUrnwD8mcgjWe8lN+7+PyqHKQsiTy9KsBQFnRqx4yOxEZUOL3sJ+4/QMbd/zv4r/YZzaLy+d60wAAAABJRU5ErkJggg==' height={50} width={50} />

</Col>


</Row>
</motion.div>

{/* ------------------------------------------------------ */}

{/* ------------------------------------------------------ */}

<motion.div
className='skill-div'
initial={{x:-1000}} animate={{x: 30 }} transition={{delay:0.6}}
>
   
<Row>

<h1 className='skill-head' >C/C++ :</h1>   


<p className='skills'> The first ever language i learned and i have 2+ years of experience using python.</p>


<Col>
<motion.p animate={{x:35}} className='small-txt' >Here is some of the code i have written in python : <li ><a href='https://github.com/'><motion.img whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAY1BMVEUAAAD///+jo6PPz8/V1dUZGRlERETq6urj4+NmZmb8/PxYWFiRkZFLS0v09PS7u7sKCgp3d3dvb28uLi6BgYEnJyfCwsKwsLBSUlIzMzOpqalfX1/d3d06OjqLi4uZmZkgICA24B/YAAAFb0lEQVR4nO1c65ayOgwFAcu1ihcUwYH3f8pDdRigSekNhbPWt//MWs4Etm2S7ibtOG4PfxcFzrcQRDv/783O78/D/mvv77E/TDiQ6OsMGCIycPCOq1BwnKPXc/BWYsDgvTmQtUaB4UheHNbxhR4R43BYlYLjHDoO3w/KKfau469MwekY7Nam0DFY1yMZIud7a4QI6zP4hyUQXM/3/Ichv5+vwdcz/j29+cQdg/i3NPna+5PUd0Xwmy/w2Dd1LGTAEIfNZ7N/UswT+KVRfG4wLqECgTfCy0cY5OoMGEi+OINM7Ici+PdlKey0GTAsuSZXRP4+FKRaikKjEgw44mYRBsFB/qoZHBZYmku9cIAIS1sKmfk89IgzOwqVPYWOhJVnJktQ6EhY5O5kEQYMxiTKZUaBITZ0zKttRIwRXo04eAtSMCww3Bal4Lo3fQrR9AmnKN/VVPmFtN7l0Wn6mfaO7jh933tn/EzVWND0+fr76XpPdZU3t0j89J+f5DrCP/V/nE5/oVnp4IYxHsmRfFjIKSFhWIchIcP4kJGK41PcCb5oBlxY0vHvrsxbqdfkUVa270/KLMobjxG5TWKQm7pQhwI3iLxxlZ5Rs3PKrQx8hkk1OPAJ0rR6yKeYWN204UzdwpBDwT9IWVa1QD4uxoG0ipY/vOViczEKcgngWkUMOUA9rhgaJ2DoUjNhGiBpVS1HYDrabOOWI09SS5aYcnkYcXggT1IKT4w8MVMgV2x/pjKkiG4w1qSYJlbQEQHCXTWgIGCYu0Tu3yW00lpqOCCaVC5vL9DIpqZi9DiQXqcLtzZgipAn/hrYmMVlDxiftcykhC5p112AWZfIHAJGk2Fu6HEGX0oa6RFvIR86CeDkygYW+rGpdugBnVwWGLyStHVJLO/KVCV0Y9sCHywryr4VHDnbyhrkIJtdqL5s5wKOrD4Hg/3yBNAfZOoUcrDth0NZJuMA/cG2GQ03ybK5gKxtVm4GuHrLZhd68eK5WhrtUPjYVTixKqtMliGK1q4thKg5maqtoIndggGd3JUNbAZ1j8aGHQGcCiqrobeICLXpjiFzG7YyI6QyanN+yuhx2P7MvHG7R54mX4CwWr15qsQqifJNW4tYGW+0kMB03VZuh5XKqdlsIEGm5l2gIMZgVIg5om1RFU2EbDg71PpNkBIqagalB+Gtk1C3e50InqNkjE6Gq+uYqDsqTkU3hqIGQahe8z6J+lBUcU7/dAxNk9Nh/LQ6V3nEc+aohKoyvE8MsnS87JAin9c050sx12hR9qq/FJGyY7dVwH2tsNjlVQusrqfLo5CcUlBferLBhjUJ0j2MMix9KxwV0Wh9D7mSPrtn/+x5FYDWEJ7Soxo6K/AwEC59tUv47Tiu70TxaDIMkxU8PDpXkkzHWVDfw+rTY+htG8d95s7ylk71lSjC5o+M6PabR2Wk+DUb2ZiESGrPT4ZeW2/6ldi+qAivwycEb6nhskk6eDMYnDzuZj8r9k7QeHVYe48ZMTFDwWT5vw8O9l5nEtI4bbJ3Sk+87ogpUKNTY0M80lf7Ong0ndokTjVzIE/MwXC3NtTHhnbcc75xLqRgXFEaSijkqWYhomBRzBk2izRVaqsJKFhtWUcRSh99fbUUb/4+QIHfdsVhHbJw0eNgW9lD9356HKwp4PlXh4N5M2yEDMoCdQ7E8sBejyOopShzKJa72HChRhzooiec28KAQ2FXVYSYKCkVDv4nDpuPdi5yDuHyR7x/WfiKHPxPMWDIbsw7xcVeVmqmt4XiUYigmr3qkaTVv3tG/2esP3vBJu7rbeHe4hbub27hHusm7vNu4V7zJu53b+Ge+ybu+2/i/x64W/j/Dy/ts9r/wfgPlr45bzQOO30AAAAASUVORK5CYII=' height={50} width={50} /></a></li>
</motion.p>
</Col>

<Col>
<motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} whileHover={{scale : 1.3}} className='Git' src='data:image/webp;base64,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' height={50} width={50} />

</Col>

</Row>
</motion.div>

{/* ------------------------------------------------------ */}

{/* ------------------------------------------------------ */}

<motion.div
className='skill-div'
initial={{x:-1000}} animate={{x: 30 }} transition={{delay:0.8}}
>
   
<Row>

<h1 className='skill-head' >Docker :</h1>   


<p className='skills'> The first ever language i learned and i have 2+ years of experience using python.</p>


<Col>
<motion.p animate={{x:35}} className='small-txt' >Here is some of the code i have written in python : <li ><a href='https://github.com/'><motion.img whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,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' height={50} width={50} /></a></li>
</motion.p>
</Col>

<Col>
<motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} whileHover={{scale : 1.3}} className='Git' src='data:image/webp;base64,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' height={50} width={50} />

</Col>

</Row>
</motion.div>

{/* ------------------------------------------------------ */}

{/* ------------------------------------------------------ */}

<motion.div
className='skill-div'
initial={{x:-1000}} animate={{x: 30 }} transition={{delay:1}}
>
   
<Row>

<h1 className='skill-head' >React :</h1>   


<p className='skills'> The first ever language i learned and i have 2+ years of experience using python.</p>


<Col>
<motion.p animate={{x:35}} className='small-txt' >Here is some of the code i have written in python : <li ><a href='https://github.com/'><motion.img whileHover={{scale : 1.3}} className='Git' src='data:image/png;base64,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' height={50} width={50} /></a></li>
</motion.p>
</Col>

<Col>
<motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} whileHover={{scale : 1.3}} className='Git' src='data:image/webp;base64,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' height={50} width={50} />

</Col>

</Row>
</motion.div>

{/* ------------------------------------------------------ */}










</div>                  
);


}