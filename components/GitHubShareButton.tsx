import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  showGitHubButton: boolean
}

const MyComponent: React.FC<Props> = ({ showGitHubButton }) => {
  return (
    <div>
      {/* Your content goes here */}
      {showGitHubButton && (
        <a
          href='https://github.com/transitive-bullshit/nextjs-notion-starter-kit'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.githubCorner}
          aria-label='View source on GitHub'
        >
          {/* GitHub share button code goes here */}
        </a>
      )}
    </div>
  )
}
